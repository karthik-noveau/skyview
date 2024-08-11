//import React, { useState, useEffect, useRef } from "react";
import {
  useSortable,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { RxDragHandleDots2 } from "react-icons/rx";
import { RiApps2AddLine } from "react-icons/ri";

import { FieldItem } from "../task_item";

import styles from "./style.module.css";
import { useState } from "react";
import { CreateTask } from "../create_task";

// Column
export const SectionItem = (props) => {
  const { id, allDataIds, name, taskList, isSortingContainer, dragOverlay } =
    props;
  const {
    //active,
    attributes,
    isDragging,
    listeners,
    //over,
    setNodeRef,
    setActivatorNodeRef,
    transition,
    transform,
  } = useSortable({
    id: id,
    taskList: {
      type: "SECTION",
    },
  });

  const [isCreateTask, setIsCreateTask] = useState(false);

  const getColumnHeight = () => {
    let h = document.getElementsByClassName("kanbanColumn")[0].clientHeight;
    return h;
  };

  const style = {
    transform: CSS.Translate.toString(transform),
    height: dragOverlay ? `${getColumnHeight() + "px"}` : null,
    transition,
    opacity: isDragging ? 0.5 : 1,
    boxShadow: dragOverlay
      ? "0 0 0 calc(1px / 1) rgba(63, 63, 68, 0.05), -1px 0 15px 0 rgba(34, 33, 81, 0.01), 0px 15px 15px 0 rgba(34, 33, 81, 0.25)"
      : "",
    border: dragOverlay
      ? "1px solid rgba(64, 150, 255, 1)"
      : "1px solid transparent", // 1px solid rgba(64, 150, 255, 1)
    //cursor: dragOverlay ? "grabbing" : "grab",
    //transform: dragOverlay ? 'rotate(0deg) scale(1.02)' : 'rotate(0deg) scale(1.0)'
    touchAction:
      "ontouchstart" in window ||
      navigator.MaxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
        ? "manipulation"
        : "none",
  };

  const onCreateTask = () => {
    setIsCreateTask(true);
  };

  return (
    <div
      ref={setNodeRef}
      className={styles.sectionContainer}
      style={style}
      //{...attributes}
      //{...listeners}
    >
      <div
        ref={setActivatorNodeRef}
        {...attributes}
        {...listeners}
        className={styles.header}
        style={{
          cursor: dragOverlay ? "grabbing" : "grab",
        }}
      >
        <RxDragHandleDots2 className={styles.dragIcon} />
        <span className={styles.sectionTitle}>{name}</span>
        <span className={styles.badge}>
          {allDataIds.length ? allDataIds.length : 0}
        </span>
      </div>
      <div className={styles.fieldListContainer}>
        <SortableContext
          items={allDataIds}
          strategy={verticalListSortingStrategy} // verticalListSortingStrategy rectSortingStrategy
        >
          {allDataIds.map((item, _index) => {
            return (
              <FieldItem
                id={item}
                key={item}
                item={taskList.filter((d) => "task-" + d.id === item)[0]}
                disabled={isSortingContainer}
              />
            );
          })}
        </SortableContext>
      </div>
      {isCreateTask ? (
        <CreateTask setIsCreateTask={setIsCreateTask} />
      ) : (
        <div className={styles.addButton} onClick={() => onCreateTask()}>
          <RiApps2AddLine className={styles.icon} />
          <span> Add task</span>
        </div>
      )}
    </div>
  );
};
