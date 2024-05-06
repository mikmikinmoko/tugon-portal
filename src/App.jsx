import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/UnAuthenticated/LandingPage/Pages/Main";
import Registration from "./Components/UnAuthenticated/LandingPage/Pages/Registration";
import LoginForm from "./Components/UnAuthenticated/LandingPage/Pages/LoginForm";
import MainAuth from "./Components/Authenticated/Pages/MainAuth";
import { useSelector } from "react-redux";
import PageLoader from "./Components/UnAuthenticated/UI/PageLoader";
import { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import Home from "./Components/Authenticated/Pages/Home";
import Page1 from "./Components/UnAuthenticated/LandingPage/Pages/Page1";
import { authActions } from "./store/store";
import AboutUs from "./Components/Authenticated/Pages/AboutUs";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

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
  const Authenticated = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainAuth />} />
        </Routes>
      </BrowserRouter>
    );
  };
  console.log(isAuthenticated);
  return (
    <>
      <Helmet>
        <title></title>
      </Helmet>
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center">
            <PageLoader />
          </div>
        }
      >
        {isAuthenticated && <Authenticated />}
      </Suspense>
      <Helmet>
        <title></title>
      </Helmet>
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center">
            <PageLoader />
          </div>
        }
      >
        {!isAuthenticated && <UnAuthenticated />}
      </Suspense>

      {/* <Helmet>
        <title></title>
      </Helmet>
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center">
            <PageLoader />
          </div>
        }
      >
        {isAuthenticated && <Home />}
      </Suspense>
      <Helmet>
        <title></title>
      </Helmet>
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center">
            <PageLoader />
          </div>
        }
      >
        {!isAuthenticated && <Page1 />}
      </Suspense> */}
    </>
  );
};

export default App;
