import logoKenzie from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { DashboardStyle } from "./dashboardStyle";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export function DashBoard() {
  const [user, setUser] = useState({});
  const useNavegate = useNavigate();
  function exitPage() {
    useNavegate("/");
    localStorage.clear();
    toast.success("Deslogado com sucesso");
  }

  useEffect(() => {
    async function userLog() {
      const token = localStorage.getItem("@user");
      const headers = {
        Authorization: `Bearers ${token}`,
      };

      try {
        const response = await api.get("/profile", { headers });
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    userLog();
  }, []);

  return (
    <DashboardStyle>
      <header>
        <img src={logoKenzie} alt="Logomarca KenzieHub" />
        <button onClick={exitPage}>Sair</button>
      </header>
      <aside>
        <h1>Olá {user.name}</h1>
        <h3>{user.course_module}</h3>
      </aside>
      <main>
        <div>
          <h2>{`Que pena! Estamos em desenvolvimento :(`}</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </main>
    </DashboardStyle>
  );
}
