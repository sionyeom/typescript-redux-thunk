import React, { useEffect, useState } from "react";
import "./styles.module.scss";
import Button from "@mui/material/Button";
import LoginUtils from "./utils/LoginUtils";

import { useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    // 토큰 값 있을 시 로그인 접근 불가
    if (localStorage.getItem("token")) {
      navigate("/main");
    }
  });

  const { handleLogin, handleData, data } = LoginUtils();

  return (
    <div>
      <Button
        variant="text"
        onClick={(e) => {
          handleLogin();
        }}
      >
        로그인
      </Button>{" "}
      <Button variant="text" onClick={handleData}>
        2 로그인
      </Button>
    </div>
  );
};

export default Login;
