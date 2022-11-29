import TodoApp from "./container/TodoApp";
import GithubProfileLoader from "./container/GithubProfileLoader";
import Tutorial from "./Page/Tutorial/Tutorial";
import RouterDefine from "./routing/router-define";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import { useEffect } from "react";
const App = () => {
  // auth

  // Local Storage 테스트 코드
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterDefine.HOME} element={<Home />} />
        <Route path={RouterDefine.Login} element={<Login />} />
        <Route path={RouterDefine.MAIN_PAGE} element={<Tutorial />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
