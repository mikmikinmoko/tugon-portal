import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/UnAuthenticated/LandingPage/Pages/Main";
import Registration from "./Components/UnAuthenticated/LandingPage/Pages/Registration";
import LoginForm from "./Components/UnAuthenticated/LandingPage/Pages/LoginForm";

const App = () => {
  // return <Main />;
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

export default App;
