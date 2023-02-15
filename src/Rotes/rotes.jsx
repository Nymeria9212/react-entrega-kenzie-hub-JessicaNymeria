import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";
import { ProtectRoute } from "../ProtectRoute";
import { DashBoard } from "../pages/dashboard";
import { TechsProvider } from "../Contexts/TechsContext";
export function RotesPages() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<ProtectRoute />}>
        <Route
          index
          element={
            <TechsProvider>
              <DashBoard />
            </TechsProvider>
          }
        />
      </Route>
    </Routes>
  );
}
