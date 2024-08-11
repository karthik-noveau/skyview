import React from "react";

import { FOOTER_MENU_LINKS, SOCIAL_MEDIA_LINKS } from "./constant";
import { LazyLoadingImage } from "../../common/image_lazy_loading";
import { AOS_ANIMATION } from "../../common/aos_animation";

import styles from "./footer.module.css";

import Logo from "../../images/logo/logo.png";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.topInfo}>
          <div className={styles.logoContainerInfo}>
            <LazyLoadingImage
              src={Logo}
              className={styles.logo}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            />
            <div
              className={styles.companyName}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              Woodhead Events
            </div>
            <div
              className={styles.slogan}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              Brewing Magical Moments
            </div>
            <div className={styles.mediaIconContainer}>
              {SOCIAL_MEDIA_LINKS.map((item, index) => {
                return (
                  <a
                    href={item.path}
                    target="_blank"
                    key={index}
                    data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                    rel="noreferrer"
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </div>

          {FOOTER_MENU_LINKS.map((item, index) => {
            return (
              <div className={styles.menuLinksContainer} key={index}>
                <div className={styles.title}>{item.title}</div>
                {item["links"].map((data, index) => {
                  return (
                    <div
                      className={styles.linkInfo}
                      key={index}
                      onClick={() => data?.path && navigate(data.path)}
                      data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                      data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                    >
                      {data.name}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={styles.copyRightsContainer}>
          <div className={styles.leftInfo}>
            All rights reserved by Woodhead Events.
          </div>
          <div className={styles.rightInfo}>
            <span>Designed by </span>
            <a href="https://skynoveau.in/" target="_blank" rel="noreferrer">
              Skynoveau Technology
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
