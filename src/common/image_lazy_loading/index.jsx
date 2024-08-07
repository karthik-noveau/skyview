import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./style.module.css";

const getFileName = (path) => {
  return path.split("/").pop().split(".")[0];
};

export const LazyLoadingImage = ({
  src,
  effect = "blur",
  wrapperProps = {
    style: {
      transitionDelay: "0.5s",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },
  className = "",
  ...rest
}) => {
  return (
    <span className={`${styles.imageWrapper} ${className}`} {...rest}>
      <LazyLoadImage
        src={src}
        effect={effect}
        wrapperProps={wrapperProps}
        alt={getFileName(src)}
        className={className}
      />
    </span>
  );
};
