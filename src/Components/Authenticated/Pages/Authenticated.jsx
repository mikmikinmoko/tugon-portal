import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainAuth from "./MainAuth";
import OSCAPage from "../Departments/OSCA/OSCAPage";
import OSCAServicesPage from "../Departments/OSCA/Services/OSCAServicesPage";
import Registration from "../Departments/OSCA/Form/Registration";
import PWDPage from "../Departments/PDAO/PWDPage";
import PWDRegistration from "../Departments/PDAO/Form/PWDRegistration";
import Navigation from "../../UnAuthenticated/LandingPage/Navigation/Navigation";
import ProfileInformation from "./ProfileInformation.jsx/Profile";
import Layout from "../../../layout/Layout";
import AboutUs from "./About/AboutUs";

const Authenticated = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainAuth />} />
          <Route path="senior" element={<OSCAPage />} />
          <Route path="senior/:services" element={<OSCAServicesPage />} />
          <Route
            path="senior/:services/:registration"
            element={<Registration />}
          />
          <Route path="pwd" element={<PWDPage />} />
          <Route path="pwd/PWDregistration" element={<PWDRegistration />} />
          <Route path="profile" element={<ProfileInformation />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Authenticated;
