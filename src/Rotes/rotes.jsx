import { Route, Routes } from "react-router-dom";
import { DashBoard } from "../pages/dashboard/dashboard";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";

export function RotesPages() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<DashBoard />} />
    </Routes>
  );
}
