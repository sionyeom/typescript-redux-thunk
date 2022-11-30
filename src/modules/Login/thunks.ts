import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { LoginAction } from "./types";
import { handleLogin } from "./api";
import { postLoginAllAsync } from "./actions";
import { LoginDescription } from "@/types/common";

export function postLoginAllThunk(
  id: string,
  pw: string
): ThunkAction<void, RootState, null, LoginAction> {
  return async (dispatch) => {
    const { request, success, failure } = postLoginAllAsync;
    dispatch(request());
    try {
      const login = await handleLogin(id, pw);
      // success 발신
      dispatch(success(login));
      // success 성공 시
      if (dispatch(success(login))) {
        // 로컬스토리지에 저장
        localStorage.setItem(
          LoginDescription.TOKEN_KEY,
          JSON.stringify(login.token)
        );
      }
    } catch (e: any) {
      // 예외처리
      dispatch(failure(e));
    }
  };
}
