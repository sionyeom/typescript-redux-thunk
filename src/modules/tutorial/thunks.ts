import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { GetTutorialAction } from "./types";
import { getAllTutorial } from "../../api/tutorial";
import { getTutorialAllAsync } from "./actions";

export function getTutorialAllThunk(): ThunkAction<
  void,
  RootState,
  null,
  GetTutorialAction
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
