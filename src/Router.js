import { BrowserRouter, Route, Routes } from "react-router-dom";

import BeforeLogin from "./pages/BeforeLogin";
import Mypage from "./pages/MyPage";
import DayUser from "./pages/DayUser";
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";
import RevisionPw from "./pages/auth/RevisionPw";
import FindPw from "./pages/auth/FindPw";
import Main from "./pages/Main";
import Header from "./components/Header";
import ViewMain from "./pages/ViewMain";
import NotFound from "./pages/Error";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/user" element={<DayUser />} />
          <Route path="/" element={<BeforeLogin />} />
          <Route path="/main" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/revisionpw" element={<RevisionPw />} />
          <Route path="/findpw" element={<FindPw />} />
          <Route path="/view" element={<ViewMain />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
