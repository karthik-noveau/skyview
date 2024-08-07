import React from "react";
import { GlobalCanvas, SmoothScrollbar } from "@14islands/r3f-scroll-rig";

export const SmoothScrollWrapper = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalCanvas style={{ zIndex: -1, width: "100%" }}></GlobalCanvas>
      <SmoothScrollbar damping={20} thumbMinSize={20}>
        {(bind) => <span {...bind}>{children}</span>}
      </SmoothScrollbar>
    </React.Fragment>
  );
};

// import React, {
//   useLayoutEffect,
//   useCallback,
//   useRef,
//   useState,
//   useEffect,
// } from "react";
// import { animated as a, useSpring } from "react-spring";
// import ResizeObserver from "resize-observer-polyfill";

// import styles from "./style.module.css";

// export const SmoothScrollWrapper = ({ children, scrollIntertia = 70 }) => {
//   const [{ y }, set] = useSpring(() => ({
//     y: [0],
//     config: {
//       mass: 1,
//       tension: 300,
//       friction: scrollIntertia,
//       precision: 0.00001,
//       velocity: 0,
//       clamp: true,
//     },
//   }));

//   const viewportRef = useRef(null);
//   const [currentHeight, setCurrentHeight] = useState(window.innerHeight);

//   const getCurrentHeight = useCallback((entries) => {
//     for (let entry of entries) {
//       const crx = entry.contentRect;
//       setCurrentHeight(crx.height);
//     }
//   }, []);

//   useLayoutEffect(() => {
//     const viewport = viewportRef.current;
//     if (!viewport) return;
//     let ro = new ResizeObserver((entries) => getCurrentHeight(entries));
//     ro.observe(viewport);
//     return () => {
//       if (!ro) return;
//       ro.disconnect();
//     };
//   }, [getCurrentHeight]);

//   useEffect(() => {
//     const handleScroll = () => set({ y: [-window.pageYOffset] });
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [set]);

//   return (
//     <>
//       <a.div
//         style={{
//           transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
//           height: currentHeight,
//         }}
//         ref={viewportRef}
//         className={styles.scrollContainer}
//       >
//         {children}
//       </a.div>
//     </>
//   );
// };
