import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { TutorialAction } from "./types";
import { getAllTutorial, postTutorial, updateTutorial } from "./tutorial";
import {
  getTutorialAllAsync,
  postTutorialAllAsync,
  updateTutorialAllAsync,
} from "./actions";

export function getTutorialAllThunk(): ThunkAction<
  void,
  RootState,
  null,
  TutorialAction
> {
  return async (dispatch) => {
    const { request, success, failure } = getTutorialAllAsync;
    dispatch(request());
    try {
      const tutorialAll = await getAllTutorial();
      dispatch(success(tutorialAll));
    } catch (e) {}
  };
}

export function PostTutorialThunk(
  title: string,
  description: string
): ThunkAction<void, RootState, null, TutorialAction> {
  return async (dispatch) => {
    const { request, success, failure } = postTutorialAllAsync;
    dispatch(request());
    try {
      const tutorialPost = await postTutorial(title, description);
      dispatch(success(tutorialPost));
    } catch (e) {}
  };
}

export function UpdateTutorialThunk(
  id: string,
  data: string[]
): ThunkAction<void, RootState, null, TutorialAction> {
  return async (dispatch) => {
    const { request, success, failure } = updateTutorialAllAsync;
    dispatch(request());
    try {
      const tutorialPost = await updateTutorial(id, data);
      dispatch(success(tutorialPost));
    } catch (e) {}
  };
}
