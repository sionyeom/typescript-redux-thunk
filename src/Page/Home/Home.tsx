import React from "react";
import "./styles.module.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div> 랜딩 페이지</div>
      <Button
        variant="text"
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인
      </Button>
    </div>
  );
};

export default Home;
