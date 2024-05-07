import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainAuth from "./MainAuth";

const Authenticated = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainAuth />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Authenticated;
