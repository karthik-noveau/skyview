import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import { SmoothScrollWrapper } from "../smooth_scroll_wrapper";

export const CustomComponentProviders = ({ children }) => {
  return (
    <React.Fragment>
      <ParallaxProvider>
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
      </ParallaxProvider>
    </React.Fragment>
  );
};
