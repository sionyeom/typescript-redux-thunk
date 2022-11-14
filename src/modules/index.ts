import { combineReducers } from "redux";
// import todos from "./todos";
import todos from "./todo_refactor";
const rootReducer = combineReducers({
  todos,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
