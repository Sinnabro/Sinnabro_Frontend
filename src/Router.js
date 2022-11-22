import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeforeLogin from "./pages/BeforeLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BeforeLogin/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
