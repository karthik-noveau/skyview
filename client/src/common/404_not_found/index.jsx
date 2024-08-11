import React from "react";

import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.text1}>404</div>
      <div className={styles.text2}>Oops! Page not found.</div>
      <p onClick={() => navigate("/")} className={styles.button}>
        Back to Home    
      </p>
    </div>
  );
}
