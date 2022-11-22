import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeforeLogin from "./pages/BeforeLogin";
import Main from "./pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BeforeLogin/>} />
        <Route path="/main" element={ <Main/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
