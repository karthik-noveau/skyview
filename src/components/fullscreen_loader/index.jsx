import { LazyLoadingImage } from "../../common/image_lazy_loading";

import styles from "./style.module.css";

import Logo from "../../images/logo/logo.png";

export const FullScreenLoader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.circle}></div>
      <div className={styles.imageContainer}>
        <LazyLoadingImage src={Logo} />
        <p>Best Quotes Text</p>
      </div>
    </div>
  );
};
