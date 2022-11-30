import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
// 로그인 res.data type import 필요
// import { Tutorial } from "@/modules/tutorial/tutorial";

export type LoginAction = ActionType<typeof actions>;

export type LoginState = {
  Login: {
    loading: boolean;
    error: Error | null;
    // data 로그인 data 타입으로 갱신
    data: any | null;
  };
};

export type LoginUserDataType = {};

export type LoginInputType = {
  id: string;
  pw: string;
};
