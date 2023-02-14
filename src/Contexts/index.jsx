import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const KenzieHubContext = createContext({});

export function KenzieHubProvider({ children }) {
  const [user, setUser] = useState(null);
  const { reset } = useForm();
  const navegate = useNavigate();
  const [modal, setModal] = useState(false);

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

  return (
    <KenzieHubContext.Provider value={{ user, onSubmitForm, setModal, modal }}>
      {children}
    </KenzieHubContext.Provider>
  );
}
