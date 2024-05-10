import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainAuth from "./MainAuth";
import OSCAPage from "../Departments/OSCA/OSCAPage";
import OSCAServicesPage from "../Departments/OSCA/Services/OSCAServicesPage";
import Registration from "../Departments/OSCA/Form/Registration";

const Authenticated = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainAuth />} />
        <Route path="senior" element={<OSCAPage />} />
        <Route path="senior/:services" element={<OSCAServicesPage />} />
        <Route
          path="senior/:services/:registration"
          element={<Registration />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Authenticated;
