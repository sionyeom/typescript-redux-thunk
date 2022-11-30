import { combineReducers } from "redux";
import todos from "./todos";
import github from "./github";
import tutorial from "./tutorial";
import Login from "./Login";
const rootReducer = combineReducers({
  todos,
  github,
  tutorial,
  Login,
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>;
