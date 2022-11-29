import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeforeLogin from "./pages/BeforeLogin";
import Mypage from "./pages/MyPage";
import DayUser from "./pages/DayUser";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<DayUser />} />
        <Route path="/" element={<BeforeLogin />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
