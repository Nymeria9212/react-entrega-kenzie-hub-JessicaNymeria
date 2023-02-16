import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../Contexts/TechsContext";
import { ModalDeleteStyle } from "./modalStyleDelete";

export function ModalEditDelete() {
  const { setModalDelete, deleteId, remove, upgrade } =
    useContext(TechsContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: deleteId.title,
      status: deleteId.status,
    },
  });

  function deleteTech() {
    remove(deleteId.id);
    setModalDelete(false);
  }
  function upgradeTech(dataForm) {
    upgrade(dataForm, deleteId.id);
    setModalDelete(false);
  }

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
        <form onSubmit={handleSubmit(upgradeTech)}>
          <label htmlFor="name-tec">Nome tecnologia</label>
          <input id="name-tec" type="text" {...register("title")} />

          <label htmlFor="">Status</label>
          <select name="status" id="" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="btns_save-and_delete">
            <button className="save" type="submit">
              Salvar alterações
            </button>
            <button type="button" className="delete" onClick={deleteTech}>
              Excluir
            </button>
          </div>
        </form>
      </div>
    </ModalDeleteStyle>
  );
}
