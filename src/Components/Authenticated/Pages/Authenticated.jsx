import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainAuth from "./MainAuth";
import OSCAPage from "../Departments/OSCA/OSCAPage";
import OSCAServicesPage from "../Departments/OSCA/Services/OSCAServicesPage";

const Authenticated = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainAuth />} />
        <Route path="seniorpage" element={<OSCAPage />} />
        <Route path="seniorpage/:services" element={<OSCAServicesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Authenticated;
