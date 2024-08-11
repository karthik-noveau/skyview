import { ParallaxBanner } from "react-scroll-parallax";

import { ScrollDownButton } from "../../common/scroll_down_button";

import styles from "./style.module.css";
import "@14islands/r3f-scroll-rig/css";

export const ParallaxBannerElement = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          // translateY: [0, 50],
          opacity: [1, 0.3],
          scale: [1, 2, "easeOutCubic"],
          shouldAlwaysCompleteAnimation: true,
          children: (
            <div className={styles.bannerWrapper}>
              <video className={styles.video} autoPlay loop muted playsInline>
                <source src="https://youtu.be/vzgWXzdRtng" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={styles.insetBoxShadow}>
                <ScrollDownButton id="#view-section" />
              </div>
            </div>
          ),
        },
      ]}
      style={{ height: "calc(100vh - 100px)" }} // Set the height as needed
    />
  );
};
