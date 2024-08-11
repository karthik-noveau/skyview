import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { LoginForm } from "./form";
import { Header } from "../login/header";

import LoginLeft from "../../images/login/login-user-steps.svg";
import LoginRight from "../../images/login/login-user-zoom.svg";

import styles from "./style.module.css";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onLogin = async (values) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/v1/user/login`,
        {
          email: values.email,
          password: values.password,
        }
      );
      if (data.success) {
        setIsLoading(false);
        navigate("/space");
      }
    } catch {
      alert("user not exist");
      setIsLoading(false);
    }
  };
  const onFormFailed = (errorInfo) => {};
  return (
    <React.Fragment>
      <Header
        buttonName="Login"
        textInfo="Already have an account with Skyview ?"
        path="login"
      />
      <div className={styles.loginWrapper}>
        <div className={styles.leftInfo}>
          <div className={styles.TitleInfo}>
            <p>Welcome to Skyview</p>
            <p>To get started, please register</p>
          </div>
          <div className={styles.formWrapper}>
            <LoginForm
              onLogin={onLogin}
              isLoading={isLoading}
              onFormFailed={onFormFailed}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <img src={LoginLeft} alt="login-bg" className={styles.loginBgLeft} />
          <img
            src={LoginRight}
            alt="login-bg"
            className={styles.loginBgRight}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
