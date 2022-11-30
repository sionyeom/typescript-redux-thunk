import { createReducer } from "typesafe-actions";
import { LoginAction, LoginState } from "./types";
import {
  POST_LOGIN_ALL,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR,
} from "./actions";

const initialState: LoginState = {
  Login: {
    loading: false,
    error: null,
    data: null,
  },
};

const login = createReducer<LoginState, LoginAction>(initialState, {
  [POST_LOGIN_ALL]: (state) => ({
    ...state,
    Login: { loading: true, error: null, data: null },
  }),
  [POST_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    Login: { loading: false, error: null, data: action.payload },
  }),
  [POST_LOGIN_ERROR]: (state, action) => ({
    ...state,
    Login: { loading: false, error: action.payload, data: null },
  }),
});

export default login;
