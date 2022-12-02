import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { TutorialAction } from "./types";
import {
  getAllTutorial,
  postTutorial,
  updateTutorial,
  deleteTutorial,
} from "./tutorial";
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
    // 해당 기능에 대한 액션의 상태들 호출 및 할당
    const { request, success, failure } = getTutorialAllAsync;
    // 리듀서 실행 요청
    dispatch(request());
    try {
      // 실행시 api 실행
      const tutorialAll = await getAllTutorial();
      // api 결과 값을 액션의 payload 담아서 전달
      dispatch(success(tutorialAll));
    } catch (e: any) {
      // 요청 실패 시 액션의 payload에 에러 반환
      failure(e);
    }
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
    } catch (e: any) {
      failure(e);
    }
  };
}

export function UpdateTutorialThunk(
  id: string,
  data: { title: string; description: string }
): ThunkAction<void, RootState, null, TutorialAction> {
  return async (dispatch) => {
    const { request, success, failure } = updateTutorialAllAsync;
    dispatch(request());
    try {
      const tutorialUpdate = await updateTutorial(id, data);
      dispatch(success(tutorialUpdate));
    } catch (e: any) {
      failure(e);
    }
  };
}

export function DeleteTutorialThunk(
  id: string
): ThunkAction<void, RootState, null, TutorialAction> {
  return async (dispatch) => {
    const { request, success, failure } = updateTutorialAllAsync;
    dispatch(request());
    try {
      const tutorialDelete = await deleteTutorial(id);
      dispatch(success(tutorialDelete));
    } catch (e: any) {
      failure(e);
    }
  };
}
