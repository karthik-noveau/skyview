import React from "react";

import { LazyLoadingImage } from "../../common/image_lazy_loading";
import { AOS_ANIMATION } from "../../common/aos_animation";

import styles from "./style.module.css";

export const Banner = ({ image, name }) => {
  return (
    <React.Fragment>
      <div className={styles.bannerWrapper}>
        <LazyLoadingImage src={image} className={styles.image} />
        <h1
          data-aos={AOS_ANIMATION.FADE_UP.TYPE}
          data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
        >
          {name}
        </h1>
      </div>
    </React.Fragment>
  );
};
