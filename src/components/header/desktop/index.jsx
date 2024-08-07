import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { LazyLoadingImage } from "../../../common/image_lazy_loading";

import styles from "./style.module.css";

import Logo from "../../../images/logo/logo.png";

export const DeskHeader = () => {
  const navigate = useNavigate();
  const [navSize, setNavSize] = useState("80px");
  const [navColor, setNavColor] = useState("black");
  const [fontColor, setFontColor] = useState("#e2e2e2");

  const location = useLocation();

  const listenScrollEvent = () => {
    if (window.scrollY < 10) {
      setNavColor("black");
      setNavSize("80px");
      setFontColor("#e2e2e2");
    } else {
      setNavColor("black");
      setNavSize("90px");
      setFontColor("#e2e2e2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <React.Fragment>
      <div
        className={styles.headerWrapper}
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 0.5s",
        }}
      >
        <div className={styles.headerContainer}>
          <div className={styles.leftInfo}>
            <LazyLoadingImage src={Logo} onClick={() => navigate("/")} />
          </div>
          <div className={styles.centerInfo}>
            <p
              onClick={() => navigate("/home")}
              className={
                location.pathname === "/" || location.pathname === "/home"
                  ? styles.active
                  : ""
              }
              style={{ color: fontColor }}
            >
              Home
            </p>
            <p
              onClick={() => navigate("/story")}
              className={location.pathname === "/story" ? styles.active : ""}
              style={{ color: fontColor }}
            >
              Story
            </p>
            <p
              onClick={() => navigate("/portfolio")}
              className={
                location.pathname === "/portfolio" ? styles.active : ""
              }
              style={{ color: fontColor }}
            >
              Portfolio
            </p>
          </div>
          <p onClick={() => navigate("/connect")} className={styles.rightInfo}>
            Connect
          </p>
        </div>
      </div>

      {/* static space  */}
      <div
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 0.5s",
        }}
      />
    </React.Fragment>
  );
};
