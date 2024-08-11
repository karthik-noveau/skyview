import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";

import logo from "../../../images/logo/logo.png";

import styles from "./style.module.css";
import { Tabs } from "./tabs";

export const SpaceHeader = () => {
  const onLogout = () => {  };

  return (
    <div className={styles.spaceWrapper}>
      <div className={styles.spaceContainer}>
        <div className={styles.leftInfo}>
          <img src={logo} alt="skyview logo" />
          <h1>SkyView</h1>
        </div>

        <Tabs />

        <div className={styles.rightInfo}>
          <div className={styles.profileLogo}>K</div>
          <IoIosLogOut className={styles.logoutIcon} onClick={onLogout} />
        </div>
      </div>
    </div>
  );
};
