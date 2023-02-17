import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

export function ProtectRoute() {
  const navegate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navegate("/");
    }
  }, []);

  return <>{user ? <Outlet /> : null}</>;
}
