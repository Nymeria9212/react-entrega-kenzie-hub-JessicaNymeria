import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";
import { api } from "../services/api";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const { setListTechs, listTechs } = useContext(UserContext);
  const [modalDelete, setModalDelete] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const onSubmitTech = async (data) => {
    try {
      const token = localStorage.getItem("@user");
      const response = await api.post("/users/techs ", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setListTechs([...listTechs, response.data]);
      toast.success("Tecnologia cadastrada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  const remove = async (id) => {
    try {
      const token = localStorage.getItem("@user");
      const response = await api.delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newsTechs = listTechs.filter((tech) => tech.id !== id);
      setListTechs(newsTechs);
      toast.success("Tecnologia excluída com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  const upgrade = async (dataForm, id) => {
    try {
      const token = localStorage.getItem("@user");
      const response = await api.put(`/users/techs/${id}`, dataForm, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newTech = listTechs.filter((tech) => tech.id !== id);
      setListTechs([response.data, ...newTech]);
      toast.success("Tecnologia editada com sucesso");
    } catch (error) {
      toast.error("Algo deu errado");
      console.log(error);
    }
  };
  return (
    <TechsContext.Provider
      value={{
        onSubmitTech,
        listTechs,
        modalDelete,
        setModalDelete,
        setDeleteId,
        deleteId,
        remove,
        upgrade,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
