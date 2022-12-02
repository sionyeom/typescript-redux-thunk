import React from "react";
import { Navigate, Outlet } from "react-router-dom";

/* 해당 ProtectedRoute의 기능은
로그인 여부 + 사용자의 정보가 파트너인지 여부 (조건)
접근 권한 여부가 결정됩니다.
추 후에 조건 수정이 가능하도록 작성하였습니다.*/
type Props = {};

const ProtectedForPartnerRoute = (props: Props) => {
  // 조건 1. 로그인한 사용자의 정보가 Farmer일 경우

  return <Outlet />;
};

export default ProtectedForPartnerRoute;
