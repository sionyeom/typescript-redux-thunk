import React from "react";
import "./styles.module.scss";
import Button from "@mui/material/Button";
import axios from "axios";
type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Button variant="text" onClick={() => {}}>
        로그인
      </Button>
    </div>
  );
};

export default Home;
