import { useSelector } from "react-redux";
import PageLoader from "./Components/UnAuthenticated/UI/PageLoader";
import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import { useCitizenAuthStore } from "./store/storage/useAuth";

const AuthenticatedPage = lazy(() =>
  import("./Components/Authenticated/Pages/Authenticated")
);
const UnAuthenticatedPage = lazy(() =>
  import("./Components/UnAuthenticated/LandingPage/Pages/UnAuthenticated")
);

const App = () => {
  // const { isAuthenticated } = useSelector((state) => state.auth);
  const { userData } = useCitizenAuthStore();

  return (
    <>
      <Helmet>
        <title></title>
      </Helmet>

      {userData ? (
        <Suspense
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <PageLoader />
            </div>
          }
        >
          <AuthenticatedPage />
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <PageLoader />
            </div>
          }
        >
          <UnAuthenticatedPage />
        </Suspense>
      )}
    </>
  );
};

export default App;
