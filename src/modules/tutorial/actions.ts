import { createAsyncAction } from "typesafe-actions";
import { Tutorial } from "./tutorial";
import { AxiosError } from "axios";

// Get Actions
export const GET_TUTORIAL_ALL = "tutorial/GET_TUTORIAL_ALL";
export const GET_TUTORIAL_SUCCESS = "tutorial/GET_TUTORIAL_SUCCESS";
export const GET_TUTORIAL_ERROR = "tutorial/GET_TUTORIAL_ERROR";

export const getTutorialAllAsync = createAsyncAction(
  GET_TUTORIAL_ALL,
  GET_TUTORIAL_SUCCESS,
  GET_TUTORIAL_ERROR
)<undefined, Tutorial, AxiosError>();

// Post Actions
export const POST_TUTORIAL = "tutorial/POST_TUTORIAL";
export const POST_TUTORIAL_SUCCESS = "tutorial/POST_TUTORIAL_SUCCESS";
export const POST_TUTORIAL_ERROR = "tutorial/POST_TUTORIAL_ERROR";

export const postTutorialAllAsync = createAsyncAction(
  POST_TUTORIAL,
  POST_TUTORIAL_SUCCESS,
  POST_TUTORIAL_ERROR
)<undefined, Tutorial, AxiosError>();

// Update Actions
export const UPDATE_TUTORIAL = "tutorial/UPDATE_TUTORIAL";
export const UPDATE_TUTORIAL_SUCCESS = "tutorial/UPDATE_TUTORIAL_SUCCESS";
export const UPDATE_TUTORIAL_ERROR = "tutorial/UPDATE_TUTORIAL_ERROR";

export const updateTutorialAllAsync = createAsyncAction(
  UPDATE_TUTORIAL,
  UPDATE_TUTORIAL_SUCCESS,
  UPDATE_TUTORIAL_ERROR
)<undefined, Tutorial, AxiosError>();

// Delete Actions
export const DELETE_TUTORIAL = "tutorial/DELETE_TUTORIAL";
export const DELETE_TUTORIAL_SUCCESS = "tutorial/DELETE_TUTORIAL_SUCCESS";
export const DELETE_TUTORIAL_ERROR = "tutorial/DELETE_TUTORIAL_ERROR";

export const deleteTutorialAllAsync = createAsyncAction(
  DELETE_TUTORIAL,
  DELETE_TUTORIAL_SUCCESS,
  DELETE_TUTORIAL_ERROR
)<undefined, Tutorial, AxiosError>();
