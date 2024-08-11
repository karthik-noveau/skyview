//import React, { useState, useEffect, useRef } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import styles from "./style.module.css";

// Task
export const FieldItem = (props) => {
  const { id, item, dragOverlay } = props;
  const {
    setNodeRef,
    //setActivatorNodeRef,
    listeners,
    isDragging,
    //isSorting,
    //over,
    //overIndex,
    transform,
    transition,
    attributes,
  } = useSortable({
    id: id,
    disabled: props.disabled,
    data: {
      type: "FIELD",
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    boxShadow: dragOverlay
      ? "0 0 0 calc(1px / 1) rgba(63, 63, 68, 0.05), -1px 0 15px 0 rgba(34, 33, 81, 0.01), 0px 15px 15px 0 rgba(34, 33, 81, 0.25)"
      : "",
    border: dragOverlay
      ? "1px solid rgba(64, 150, 255, 1)"
      : "1px solid transparent", // 1px solid rgba(64, 150, 255, 1)
    cursor: dragOverlay ? "grabbing" : "grab",
    //transform: dragOverlay ? 'rotate(0deg) scale(1.02)' : 'rotate(0deg) scale(1.0)'
    touchAction:
      window.PointerEvent ||
      "ontouchstart" in window ||
      navigator.MaxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
        ? "manipulation"
        : "none",
  };
  return (
    <div
      ref={props.disabled ? null : setNodeRef}
      className={styles.card}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className={styles.taskText}>{item.name}</div>
      {/* <div className={styles.dateText}>Aug 18</div> */}
    </div>
  );
};
