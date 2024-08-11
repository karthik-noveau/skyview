import React from "react";

import { IoLogoWhatsapp } from "react-icons/io";

import styles from "./style.module.css";

const WHATSAPP_NUMBER = "6380561849";
const WHATSAPP_MESSAGE =
  "Hi there! I would like to know more about your services.";

export const WhataApp = () => {
  return (
    <React.Fragment>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          WHATSAPP_MESSAGE
        )}`}
        target="_blank"
        rel="noreferrer"
        className={styles.whatsappContainer}
      >
        <IoLogoWhatsapp className={styles.icon} />
      </a>
    </React.Fragment>
  );
};
