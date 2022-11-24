import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeforeLogin from "./pages/BeforeLogin";
import Main from "./pages/Main";
import Mypage from "./pages/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BeforeLogin/>} />
        <Route path="/main" element={ <Main/> } />
        <Route path="/mypage" element={ <Mypage/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
