import isAuth from "@/utils/common/isAuth";
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
/* 해당 PrivateRoute의 기능은
로그인 여부에 따라 (조건)
접근 권한 여부가 결정됩니다.
추 후에 조건 수정이 가능하도록 작성하였습니다.*/

type Props = {
  authentication: boolean;
};

const PrivateRoute = ({ authentication }: Props) => {
  if (authentication) {
    // 인증이 반드시 필요한 페이지

    // 인증을 안했을 경우 로그인 페이지로, 했을 경우 해당 페이지로
    return isAuth() === false ? <Navigate to="/login" /> : <Outlet />;
  } else {
    // 인증이 반드시 필요 없는 페이지

    // 인증을 안햇을 경우 해당 페이지로 인증을 한 상태일 경우 main페이지로
    return isAuth() === false ? <Outlet /> : <Navigate to="/main" />;
  }
};

export default PrivateRoute;
