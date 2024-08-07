import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { Helmet } from "react-helmet";

import { Banner } from "../../components/banner";
import { FormValidation } from "./form";
import { ScrollToTop } from "../../common/scroll_to_top_init";
import { AOS_ANIMATION } from "../../common/aos_animation";

import styles from "./styles.module.css";

import bannerImage from "../../images/connect/banner-img.jpg";
import GoogleMap from "../../components/map";

export default function Connect() {
  ScrollToTop();
  return (
    <React.Fragment>
      <Helmet>
        <title>add title here</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <Banner image={bannerImage} name="Contact us" />
      <div className={styles.sectionWrapper}>
        <div className={styles.contactWrapper}>
          <div className={styles.titleInfo}>
            <h1
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              Get In Touch
            </h1>
            <p
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              Thank you for your interest
            </p>
          </div>
          <div className={styles.contactContainer}>
            <div className={styles.leftInfo}>
              <div className={styles.leftInfoWrapper}>
                <FormValidation />
              </div>
            </div>
            <div className={styles.rightInfo}>
              <div className={styles.rightInfoWrapper}>
                <div className={styles.contactItemContainer}>
                  <div
                    className={styles.iconWrapper}
                    data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                  >
                    <FiPhoneCall />
                  </div>
                  <div className={styles.infoWrapper}>
                    <p
                      data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                      data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                    >
                      Call us
                    </p>
                    <p
                      data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                      data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                    >
                      +91 6380561849
                    </p>
                  </div>
                </div>
                <div className={styles.contactItemContainer}>
                  <div
                    className={styles.iconWrapper}
                    data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                  >
                    <IoMailOutline />
                  </div>
                  <div className={styles.infoWrapper}>
                    <p
                      data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                      data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                    >
                      Mail us
                    </p>
                    <p
                      data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                      data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                    >
                      woodheadevents@gmail.com
                    </p>
                  </div>
                </div>
                <div className={styles.contactItemContainer}>
                  <div
                    className={styles.iconWrapper}
                    data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                  >
                    <GrLocation />
                  </div>
                  <div className={`${styles.infoWrapper}`}>
                    <p
                      data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                      data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                    >
                      Address
                    </p>
                    <p
                      data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                      data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                    >
                      S1, Second floor, Silverline Apartments, 2nd Cross St, VGP
                      Selva Nagar, Velachery, Chennai, Tamil Nadu 600042
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.mapContainer}
          data-aos={AOS_ANIMATION.FADE_UP.TYPE}
          data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
        >
          <GoogleMap latitude="12.972420" longitude="80.221270" />
        </div>
      </div>
    </React.Fragment>
  );
}
