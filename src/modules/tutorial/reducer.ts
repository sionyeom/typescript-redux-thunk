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
  DELETE_TUTORIAL,
  DELETE_TUTORIAL_SUCCESS,
  DELETE_TUTORIAL_ERROR,
} from "./actions";

// 데이터 호출 상태 정의
const initialState: TutorialState = {
  tutorialAll: {
    loading: false,
    error: null,
    data: null,
  },
};

// 액션에 대한 리듀서 작성
const tutorialAll = createReducer<TutorialState, TutorialAction>(initialState, {
  // Get 리듀서 작성
  [GET_TUTORIAL_ALL]: (state) => ({
    ...state,
    // loading 체크 가능
    tutorialAll: { loading: true, error: null, data: null },
  }),
  [GET_TUTORIAL_SUCCESS]: (state, aciton) => ({
    ...state,
    tutorialAll: {
      loading: false,
      error: null,
      // 호출 성공시 data에 데이터 할당
      data: aciton.payload,
    },
  }),
  [GET_TUTORIAL_ERROR]: (state, aciton) => ({
    ...state,
    tutorialAll: {
      loading: false,
      // 에러 발생시 error에 에러내용 할당
      error: aciton.payload,
      data: null,
    },
  }),
  // Post 리듀서 작성
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
  // Update 리듀서 작성
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
  // Delete 리듀서 작성
  [DELETE_TUTORIAL]: (state) => ({
    ...state,
    tutorialAll: { loading: true, error: null, data: null },
  }),
  [DELETE_TUTORIAL_SUCCESS]: (state, aciton) => ({
    ...state,
    tutorialAll: {
      loading: false,
      error: null,
      data: aciton.payload,
    },
  }),
  [DELETE_TUTORIAL_ERROR]: (state, aciton) => ({
    ...state,
    tutorialAll: {
      loading: false,
      error: aciton.payload,
      data: null,
    },
  }),
});

export default tutorialAll;
