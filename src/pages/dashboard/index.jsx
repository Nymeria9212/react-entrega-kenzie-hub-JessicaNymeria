import logoKenzie from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { DashboardStyle } from "./dashboardStyle";
import { useContext } from "react";
import { toast } from "react-toastify";
import { KenzieHubContext } from "../../Contexts";
import { ModalAddTech } from "../../components/Modal";

export function DashBoard() {
  const { user, setModal, modal } = useContext(KenzieHubContext);
  const navegate = useNavigate();
  function exitPage() {
    navegate("/");
    localStorage.clear();
    toast.success("Deslogado com sucesso");
  }

  return (
    <DashboardStyle>
      <nav>
        <img src={logoKenzie} alt="Logomarca KenzieHub" />
        <button className="logout" onClick={exitPage}>
          Sair
        </button>
      </nav>
      <header>
        <h1>Olá {user.name}</h1>
        <h3>{user.course_module}</h3>
      </header>
      <main>
        <div className="div-center">
          <div className="div_btn-add-tech">
            <h2>Tecnologias</h2>
            <button
              onClick={() => {
                setModal(true);
              }}
            >
              +
            </button>
          </div>
          <ul></ul>
        </div>
      </main>
      {modal ? <ModalAddTech /> : null}
    </DashboardStyle>
  );
}
