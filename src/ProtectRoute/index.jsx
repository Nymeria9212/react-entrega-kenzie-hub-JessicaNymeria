import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { KenzieHubContext } from "../Contexts";

export function ProtectRoute() {
  const navegate = useNavigate();
  const { user } = useContext(KenzieHubContext);

  useEffect(() => {
    if (!user) {
      navegate("/");
    }
  }, []);

  return <>{user ? <Outlet /> : null}</>;
}
