import React from "react";
import { Helmet } from "react-helmet";

import { ScrollToTop } from "../../common/scroll_to_top_init";

import styles from "./style.module.css";

export default function Home() {
  ScrollToTop();

  return (
    <React.Fragment>
      <Helmet>
        <title> add title here </title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        {/* add schema here */}
      </Helmet>
      <div className={styles.wrapper}></div>
    </React.Fragment>
  );
}
