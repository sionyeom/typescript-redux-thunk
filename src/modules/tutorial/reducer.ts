import { createReducer } from "typesafe-actions";
import { TutorialAction, TutorialState } from "./types";
import {
  GET_TUTORIAL_ALL,
  GET_TUTORIAL_SUCCESS,
  GET_TUTORIAL_ERROR,
  POST_TUTORIAL,
  POST_TUTORIAL_SUCCESS,
  POST_TUTORIAL_ERROR,
  UPDATE_TUTORIAL,
  UPDATE_TUTORIAL_SUCCESS,
  UPDATE_TUTORIAL_ERROR,
} from "./actions";

const initialState: TutorialState = {
  tutorialAll: {
    loading: false,
    error: null,
    data: null,
  },
};

const tutorialAll = createReducer<TutorialState, TutorialAction>(initialState, {
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
  [POST_TUTORIAL]: (state) => ({
    ...state,
    tutorialAll: { loading: true, error: null, data: null },
  }),
  [POST_TUTORIAL_SUCCESS]: (state, aciton) => ({
    ...state,
    tutorialAll: {
      loading: false,
      error: null,
      data: aciton.payload,
    },
  }),
  [POST_TUTORIAL_ERROR]: (state, aciton) => ({
    ...state,
    tutorialAll: {
      loading: false,
      error: aciton.payload,
      data: null,
    },
  }),
  [UPDATE_TUTORIAL]: (state) => ({
    ...state,
    tutorialAll: { loading: true, error: null, data: null },
  }),
  [UPDATE_TUTORIAL_SUCCESS]: (state, aciton) => ({
    ...state,
    tutorialAll: {
      loading: false,
      error: null,
      data: aciton.payload,
    },
  }),
  [UPDATE_TUTORIAL_ERROR]: (state, aciton) => ({
    ...state,
    tutorialAll: {
      loading: false,
      error: aciton.payload,
      data: null,
    },
  }),
});

export default tutorialAll;
