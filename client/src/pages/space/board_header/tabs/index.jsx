import { useState } from "react";
import { BsPlus } from "react-icons/bs";

import { CreateSpace as CreateBoard } from "../../create";

import styles from "./style.module.css";

const boardTabs = [
  {
    name: "Daily workflow",
    isActive: true,
  },
  {
    name: "woodhead events",
    isActive: false,
  },
  {
    name: "drengineers",
    isActive: false,
  },
];

export const BoardTabs = () => {
  const [isCreateBoard, setIsCreateBoard] = useState(false);

  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {};

  return (
    <div className={styles.tabWrapper}>
      {boardTabs.map((tab) => {
        return (
          <div
            className={`${styles.tabContainer} ${
              tab.isActive && styles.isActive
            } `}
          >
            {tab.name}
            <div className={styles.hoverLine} />
          </div>
        );
      })}
      {isCreateBoard ? (
        <CreateBoard
          placeholder="Enter board name"
          onClose={setIsCreateBoard}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className={styles.createBoard}
        />
      ) : (
        <div
          className={styles.createIcon}
          onClick={() => setIsCreateBoard(true)}
        >
          <BsPlus />
        </div>
      )}
    </div>
  );
};
