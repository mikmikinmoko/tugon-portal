import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import LoginForm from "./LoginForm";
import Registration from "./Registration";

const UnAuthenticated = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UnAuthenticated;
