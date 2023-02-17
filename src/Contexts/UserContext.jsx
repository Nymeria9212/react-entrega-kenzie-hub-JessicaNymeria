import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const { reset } = useForm();
  const navegate = useNavigate();
  const [modal, setModal] = useState(false);
  const [listTechs, setListTechs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("@user");

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    if (token) {
      async function userAutoLogin() {
        try {
          const response = await api.get("/profile", { headers });
          setUser(response.data);
          setListTechs(response.data.techs);
          navegate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      }
      userAutoLogin();
    }
  }, []);

  const onSubmitForm = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      toast.success("Usuario logado com sucesso");
      setUser(response.data.user);
      localStorage.setItem("@user", response.data.token);
      navegate("/dashboard");
    } catch (error) {
      toast.error("Ops, algo deu errado! Tente novamente!");
      console.error(error);
      reset();
    }
  };
  const onSubmitFunction = async (data) => {
    try {
      const response = await api.post("/users", data);
      toast.success("Usuario cadastrado com sucesso");
      useNavegate("/");
    } catch (error) {
      toast.error("Ops, algo deu errado!");
      console.error(error);
      reset();
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        onSubmitForm,
        setModal,
        modal,
        setListTechs,
        listTechs,
        onSubmitFunction,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
