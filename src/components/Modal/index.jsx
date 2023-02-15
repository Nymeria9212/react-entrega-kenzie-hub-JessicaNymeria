import { useContext } from "react";
import { useForm } from "react-hook-form";
import { KenzieHubContext } from "../../Contexts";
import { TechsContext } from "../../Contexts/TechsContext";
import { ModalStyle } from "./styleModal";

export function ModalAddTech() {
  const { register, handleSubmit } = useForm();
  const { setModal } = useContext(KenzieHubContext);
  const { onSubmitTech } = useContext(TechsContext);

  function onSubmit(data) {
    onSubmitTech(data);
    setModal(false);
  }

  return (
    <ModalStyle>
      <div className="container">
        <div className="header-close">
          <h3>Cadastrar tecnologia</h3>
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Nome</label>
          <input id="title" type="text" {...register("title")} />

          <label htmlFor="status">Selecionar Status</label>
          <select id="status" name="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button className="btnRegisterTech">Cadastrar tecnologia</button>
        </form>
      </div>
    </ModalStyle>
  );
}
