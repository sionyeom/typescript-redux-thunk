import { createAsyncAction } from "typesafe-actions";
// import type
import { AxiosError } from "axios";

export const POST_LOGIN_ALL = "login/POST_LOGIN_ALL";
export const POST_LOGIN_SUCCESS = "login/POST_LOGIN_SUCCESS";
export const POST_LOGIN_ERROR = "login/POST_LOGIN_ERROR";

export const postLoginAllAsync = createAsyncAction(
  POST_LOGIN_ALL,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR
)<undefined, any, AxiosError>();
