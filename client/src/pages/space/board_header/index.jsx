import { SlArrowDown } from "react-icons/sl";

import styles from "./style.module.css";
import { BoardTabs } from "./tabs";

export const BoardHeader = () => {
  return (
    <div className={styles.boardWrapper}>
      <div className={styles.spaceNameContainer}>
        <div className={styles.leftInfo}>
          <img
            src="https://imgs.search.brave.com/DP4MCAmTmYJlDNIgaCabvkoPXphN1uluAdN0nirZHSI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ncmFwaGFzc2V0/cy5jb20vVzVRZlR6/bktSNW1IRkdDM0tq/b1k.jpeg"
            alt="logo"
          />
          <div className={styles.spaceTitle}>Noveau Workspace</div>
        </div>
        <div className={styles.rightInfo}>
          <SlArrowDown />
        </div>
      </div>

      <BoardTabs />
    </div>
  );
};
