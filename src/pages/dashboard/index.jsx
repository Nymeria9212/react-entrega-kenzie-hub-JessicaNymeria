import logoKenzie from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { DashboardStyle } from "./dashboardStyle";
import { useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../Contexts/UserContext";
import { ModalAddTech } from "../../components/Modal";
import { TechCard } from "../../components/TechCardUser/techCard";
import { TechsContext } from "../../Contexts/TechsContext";
import { ModalEditDelete } from "../../components/ModalEditDelete";

export function DashBoard() {
  const { user, setModal, modal } = useContext(UserContext);
  const navegate = useNavigate();
  const { listTechs, modalDelete } = useContext(TechsContext);
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
              className="addButton"
              onClick={() => {
                setModal(true);
              }}
            >
              +
            </button>
          </div>

          {listTechs.length == 0 ? (
            <p>Você não tem nenhuma tecnologia cadastrada ainda</p>
          ) : (
            <ul>
              {listTechs.map((techno) => (
                <TechCard key={techno.id} tech={techno} />
              ))}
            </ul>
          )}
        </div>
      </main>
      {modal ? <ModalAddTech /> : null}
      {modalDelete ? <ModalEditDelete /> : null}
    </DashboardStyle>
  );
}
