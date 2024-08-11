import { useNavigate } from "react-router-dom";
import Logo from "../../../images/logo/logo.png";

import styles from "./style.module.css";

export const Header = ({ buttonName, textInfo, path }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.leftInfo}>
          <div className={styles.logoContainer}>
            <img src={Logo} alt="skyview" />
            <p>Skyview</p>
          </div>
          <div className={styles.logoQuotes}>Streamline your works</div>
        </div>
        <div className={styles.rightInfo}>
          <p>{textInfo}</p>
          <div className={styles.menu} onClick={() => navigate(`/${path}`)}>
            {buttonName}
          </div>
        </div>
      </div>
    </div>
  );
};
