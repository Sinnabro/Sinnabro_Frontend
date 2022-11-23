import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeforeLogin from "./pages/BeforeLogin";
import Mypage from "./pages/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BeforeLogin/>} />
        <Route path="/mypage" element={ <Mypage/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
