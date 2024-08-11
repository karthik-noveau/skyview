import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  closestCenter,
  pointerWithin,
  rectIntersection,
  DndContext,
  DragOverlay,
  getFirstCollision,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  useSensors,
  useSensor,
  MeasuringStrategy,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import update from "immutability-helper";

import ClientOnlyPortal from "./ClientOnlyPortal";
import { SectionItem } from "./section_item";
import { FieldItem } from "./task_item";

import styles from "./style.module.css";
import { CreateSpace } from "../create";

export const DndBoard = ({ tasks, columns }) => {
  const [isCreateSection, setIsCreateSection] = useState(false);

  const [taskList, setTaskList] = useState(null);
  const [allDataIds, setAllDataIds] = useState({}); // columnId: [taskIds]
  const [columnIds, setColumnIds] = useState([]);

  const [activeId, setActiveId] = useState(null);
  const lastOverId = useRef(null);
  const recentlyMovedToNewContainer = useRef(false);

  const isSortingContainer = activeId ? columnIds.includes(activeId) : false;

  useEffect(() => {
    if (tasks) {
      setTaskList(tasks);
      let cols = {};
      columns.sort((a, b) => a.order - b.order);
      columns.forEach((item) => {
        cols["column-" + item.id] = [];
      });
      tasks.forEach((item) => {
        if (!("column-" + item.col_id in cols)) {
          cols["column-" + item.col_id] = [];
        }
        cols["column-" + item.col_id].push("task-" + item.id);
      });
      setAllDataIds(cols);
      setColumnIds(Object.keys(cols));
    }
  }, [tasks, columns]);

  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {};

  const moveBetweenContainers = useCallback(
    (activeContainer, overContainer, active, over, overId) => {
      const activeItems = allDataIds[activeContainer];
      const overItems = allDataIds[overContainer];
      const overIndex = overItems.indexOf(overId);
      const activeIndex = activeItems.indexOf(active.id);

      let newIndex;

      if (overId in allDataIds) {
        newIndex = overItems.length + 1;
      } else {
        const isBelowOverItem =
          over &&
          active.rect?.current?.translated &&
          active.rect?.current?.translated.top >=
            over.rect?.top + over.rect?.height;

        const modifier = isBelowOverItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }
      recentlyMovedToNewContainer.current = true;

      setAllDataIds(
        update(allDataIds, {
          [activeContainer]: {
            $splice: [[activeIndex, 1]],
          },
          [overContainer]: {
            $splice: [[newIndex, 0, active.id]],
            //$splice: [[newIndex, 0, allDataIds[activeContainer][activeIndex]],
          },
        })
      );
    },
    [allDataIds]
  );

  /**
   * Custom collision detection strategy optimized for multiple columnIds
   *
   * - First, find any droppable columnIds intersecting with the pointer.
   * - If there are none, find intersecting columnIds with the active draggable.
   * - If there are no intersecting columnIds, return the last matched intersection
   *
   */
  const collisionDetectionStrategy = useCallback(
    (args) => {
      if (activeId && activeId in allDataIds) {
        return closestCenter({
          ...args,
          droppableContainers: args.droppableContainers.filter(
            (container) => container.id in allDataIds
          ),
        });
      }

      // Start by finding any intersecting droppable
      const pointerIntersections = pointerWithin(args);
      const intersections =
        pointerIntersections.length > 0
          ? // If there are droppables intersecting with the pointer, return those
            pointerIntersections
          : rectIntersection(args);
      let overId = getFirstCollision(intersections, "id");

      if (overId !== null) {
        if (overId in allDataIds) {
          const containerItems = allDataIds[overId];

          // If a container is matched and it contains allDataIds (columns 'A', 'B', 'C')
          if (containerItems.length > 0) {
            // Return the closest droppable within that container
            overId = closestCenter({
              ...args,
              droppableContainers: args.droppableContainers.filter(
                (container) =>
                  container.id !== overId &&
                  containerItems.includes(container.id)
              ),
            })[0]?.id;
          }
        }

        lastOverId.current = overId;

        return [{ id: overId }];
      }

      // When a draggable item moves to a new container, the layout may shift
      // and the `overId` may become `null`. We manually set the cached `lastOverId`
      // to the id of the draggable item that was moved to the new container, otherwise
      // the previous `overId` will be returned which can cause allDataIds to incorrectly shift positions
      if (recentlyMovedToNewContainer.current) {
        lastOverId.current = activeId;
      }

      // If no droppable is matched, return the last match
      return lastOverId.current ? [{ id: lastOverId.current }] : [];
    },
    [activeId, allDataIds]
  );

  const [clonedItems, setClonedItems] = useState(null);
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        //distance: 5,
        delay: 100,
        tolerance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        distance: 5,
        delay: 100,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      KeyboardSensor: {
        distance: 5,
        delay: 100,
        tolerance: 5,
      },
    })
  );

  const findContainer = (id) => {
    if (id in allDataIds) return id;
    return columnIds.find((key) => allDataIds[key].includes(id));
  };

  function handleDragStart({ active }) {
    setActiveId(active.id);
    setClonedItems(allDataIds);
  }

  function handleDragOver({ active, over }) {
    const overId = over?.id;

    if (!overId || active.id in allDataIds) return;

    const overContainer = findContainer(overId);
    const activeContainer = findContainer(active.id);

    if (!overContainer || !activeContainer) return;

    if (activeContainer !== overContainer) {
      moveBetweenContainers(
        activeContainer,
        overContainer,
        active,
        over,
        overId
      );
    }
  }

  function handleDragEnd({ active, over }) {
    if (!over) {
      setActiveId(null);
      return;
    }

    if (active.id in allDataIds && over?.id) {
      setColumnIds((columnIds) => {
        const activeIndex = columnIds.indexOf(active.id);
        const overIndex = columnIds.indexOf(over.id);

        return arrayMove(columnIds, activeIndex, overIndex);
      });
    }

    const activeContainer = findContainer(active.id);

    if (!activeContainer) {
      setActiveId(null);
      return;
    }

    const overContainer = findContainer(over.id);

    if (overContainer) {
      const activeIndex = allDataIds[activeContainer].indexOf(active.id);
      const overIndex = allDataIds[overContainer].indexOf(over.id);

      if (activeIndex !== overIndex) {
        setAllDataIds((items) => ({
          ...items,
          [overContainer]: arrayMove(
            items[overContainer],
            activeIndex,
            overIndex
          ),
        }));
      }
    }

    setActiveId(null);
  }

  const handleDragCancel = () => {
    if (clonedItems) {
      // Reset allDataIds to their original state in case allDataIds have been
      // Dragged across columnIds
      setAllDataIds(clonedItems);
    }

    setActiveId(null);
    setClonedItems(null);
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      recentlyMovedToNewContainer.current = false;
    });
  }, [allDataIds]);

  const onAddSectionClick = () => {};

  return (
    <div className={styles.kanban}>
      <DndContext
        sensors={sensors}
        collisionDetection={collisionDetectionStrategy}
        measuring={{
          droppable: {
            strategy: MeasuringStrategy.WhileDragging,
          },
        }}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <div className={styles.kanbanContainer}>
          <SortableContext
            items={columnIds}
            strategy={horizontalListSortingStrategy}
          >
            {columnIds.map((containerId) => {
              return (
                <SectionItem
                  id={containerId}
                  key={containerId}
                  allDataIds={allDataIds[containerId]}
                  name={
                    columns.filter((c) => "column-" + c.id === containerId)[0]
                      .name
                  }
                  taskList={taskList}
                  isSortingContainer={isSortingContainer}
                />
              );
            })}
          </SortableContext>
          {isCreateSection ? (
            <CreateSpace
              placeholder="Enter section name"
              onClose={setIsCreateSection}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className={styles.createSection}
            />
          ) : (
            <div
              className={styles.addSection}
              onClick={() => setIsCreateSection(true)}
            >
              Add Section
            </div>
          )}
        </div>
        <ClientOnlyPortal selector=".kanban">
          <DragOverlay>
            {activeId ? (
              columnIds.includes(activeId) ? (
                <SectionItem
                  id={activeId}
                  allDataIds={allDataIds[activeId]}
                  name={
                    columns.filter((c) => "column-" + c.id === activeId)[0].name
                  }
                  taskList={taskList}
                  dragOverlay
                />
              ) : (
                <FieldItem
                  id={activeId}
                  item={taskList.filter((d) => "task-" + d.id === activeId)[0]}
                  dragOverlay
                />
              )
            ) : null}
          </DragOverlay>
        </ClientOnlyPortal>
      </DndContext>
    </div>
  );
};
