import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../Contexts/TechsContext";
import { ModalDeleteStyle } from "./modalStyleDelete";

export function ModalEditDelete() {
  const { register, handleSubmit } = useForm();
  const { setModalDelete } = useContext(TechsContext);
  return (
    <ModalDeleteStyle>
      <div className="container">
        <div className="header-close">
          <h3>Tecnologia Detalhes</h3>
          <button
            onClick={() => {
              setModalDelete(false);
            }}
          >
            X
          </button>
        </div>
        <form>
          <label htmlFor="name-tec">Nome tecnologia</label>
          <input id="name-tec" type="text" />

          <label htmlFor="">Status</label>
          <select name="status" id="">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="btns_save-and_delete">
            <button className="save" type="submit">
              Salvar alterações
            </button>
            <button className="delete">Excluir</button>
          </div>
        </form>
      </div>
    </ModalDeleteStyle>
  );
}
