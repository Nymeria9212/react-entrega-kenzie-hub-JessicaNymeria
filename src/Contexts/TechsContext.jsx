import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const [listTechs, setListTechs] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@user");
    if (token) {
      const techsLoading = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setListTechs(response.data.techs);
        } catch (error) {
          console.log(error);
        }
      };
      techsLoading();
    }
  }, []);

  const onSubmitTech = async (data) => {
    try {
      const token = localStorage.getItem("@user");
      const response = await api.post("/users/techs ", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setListTechs([...listTechs, response.data.techs]);
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TechsContext.Provider
      value={{ onSubmitTech, listTechs, modalDelete, setModalDelete }}
    >
      {children}
    </TechsContext.Provider>
  );
};
