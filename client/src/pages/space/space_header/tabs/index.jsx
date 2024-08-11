import { useState } from "react";
import { BsPlus } from "react-icons/bs";

import { CreateSpace } from "../../create";

import styles from "./style.module.css";

const spaceTabsData = [
  {
    name: "Noveau workspace",
    isActive: true,
  },
  {
    name: "kissflow workspace",
    isActive: false,
  },
];

export const Tabs = () => {
  const [isCreateSpace, setIsCreateSpace] = useState(false);

  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {};

  return (
    <div className={styles.tabWrapper}>
      {spaceTabsData.map((tab) => {
        return (
          <div
            className={`${styles.tabContainer} ${
              tab.isActive && styles.isActive
            } `}
            // onClick={() => tabOnClick(tab)}
          >
            {tab.name}
          </div>
        );
      })}
      {isCreateSpace ? (
        <CreateSpace
          placeholder="Enter space name"
          onClose={setIsCreateSpace}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        />
      ) : (
        <div
          className={styles.createIcon}
          onClick={() => setIsCreateSpace(true)}
        >
          <BsPlus />
        </div>
      )}
    </div>
  );
};
