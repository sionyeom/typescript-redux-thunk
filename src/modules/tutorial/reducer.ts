import { createReducer } from "typesafe-actions";
import { GetTutorialAction, TutorialState } from "./types";
import {
  GET_TUTORIAL_ALL,
  GET_TUTORIAL_SUCCESS,
  GET_TUTORIAL_ERROR,
} from "./actions";

const initialState: TutorialState = {
  tutorialAll: {
    loading: false,
    error: null,
    data: null,
  },
};

const tutorialAll = createReducer<TutorialState, GetTutorialAction>(
  initialState,
  {
    [GET_TUTORIAL_ALL]: (state) => ({
      ...state,
      tutorialAll: { loading: true, error: null, data: null },
    }),
    [GET_TUTORIAL_SUCCESS]: (state, aciton) => ({
      ...state,
      tutorialAll: {
        loading: false,
        error: null,
        data: aciton.payload,
      },
    }),
    [GET_TUTORIAL_ERROR]: (state, aciton) => ({
      ...state,
      tutorialAll: {
        loading: false,
        error: aciton.payload,
        data: null,
      },
    }),
  }
);

export default tutorialAll;
