import TodoApp from "./container/TodoApp";
import GithubProfileLoader from "./container/GithubProfileLoader";
import Tutorial from "./Page/Tutorial/Tutorial";
import RouterDefine from "./routing/router-define";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// 로그인 및 권한 여부 체크 컴포넌트
import PrivateRoute from "./routing/components/PrivateRoute";
import ProtectedRoute from "./routing/components/ProtectedRoute";
import ProtectedForAdminRoute from "./routing/components/ProtectedForAdminRoute";
import ProtectedForPartnerRoute from "./routing/components/ProtectedForPartnerRoute";
// 페이지 컴포넌트
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Admin from "./Page/Admin/Admin";
import Partner from "./Page/Partner/Partner";
import NotFound from "./Page/NotFound/NotFound";
const App = () => {
  // auth

  // Local Storage 테스트 코드
  return (
    <BrowserRouter>
      <Routes>
        {/* 인증 여부 상관 없이 접근 가능한 페이지 */}
        <Route path={RouterDefine.LANDING_PAGE} element={<Home />} />

        {/* 인증을 하지 않아야 접근 가능한 페이지 */}
        <Route element={<PrivateRoute authentication={false} />}>
          <Route path={RouterDefine.LOGIN} element={<Login />} />
        </Route>

        {/* 인증을 해야만 접근 가능한 페이지 */}
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path={RouterDefine.MAIN_PAGE} element={<Tutorial />} />

          {/* 관리자 권한 체크 필요한 페이지 정의 */}
          <Route element={<ProtectedForAdminRoute />}>
            <Route path={RouterDefine.ADMIN_MAIN} element={<Admin />} />
          </Route>

          {/* 파트너 권한 체크 필요한 페이지 정의 */}
          <Route element={<ProtectedForAdminRoute />}>
            <Route path={RouterDefine.PARTNER_MAIN} element={<Partner />} />
          </Route>
        </Route>

        {/* 인증/권한 여부 상관 없이 접근 가능한 ERROR 페이지 정의 */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
