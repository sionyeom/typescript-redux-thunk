import { createAsyncAction } from "typesafe-actions";
import { Tutorial } from "../../api/tutorial";
import { AxiosError } from "axios";

export const GET_TUTORIAL_ALL = "tutorial/GET_TUTORIAL_ALL";
export const GET_TUTORIAL_SUCCESS = "tutorial/GET_TUTORIAL_SUCCESS";
export const GET_TUTORIAL_ERROR = "tutorial/GET_TUTORIAL_ERROR";

export const getTutorialAllAsync = createAsyncAction(
  GET_TUTORIAL_ALL,
  GET_TUTORIAL_SUCCESS,
  GET_TUTORIAL_ERROR
)<undefined, Tutorial, AxiosError>();
