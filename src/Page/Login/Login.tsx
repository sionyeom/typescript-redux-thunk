import React from "react";
import "./styles.module.scss";
import Button from "@mui/material/Button";
import axios from "axios";
import LoginUtils from "./utils/LoginUtils";
type Props = {};

const Login = (props: Props) => {
  console.log("login");
  const { handleLogin } = LoginUtils();
  return (
    <div>
      <Button
        variant="text"
        onClick={() => {
          handleLogin();
        }}
      >
        로그인
      </Button>
    </div>
  );
};

export default Login;
