import { createRoot } from "react-dom/client";
import App from "@/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
