import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import LoginForm from "./LoginForm";
import Registration from "./Registration";
import Layout from "../../../../layout/Layout";

const UnAuthenticated = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UnAuthenticated;
