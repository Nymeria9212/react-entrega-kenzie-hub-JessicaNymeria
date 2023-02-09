import { Link, useNavigate } from "react-router-dom";
import { ImEye } from "react-icons/im";
import { FormStyle } from "./formLoginStyle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

const formSchema = yup.object({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export function FormLogin() {
  const useNavegate = useNavigate();
  const [passw, setPassw] = useState(true);

  function viewPassword(event) {
    event.preventDefault();
    if (passw) {
      setPassw(false);
    } else {
      setPassw(true);
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitForm = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      toast.success("Usuario logado com sucesso");
      const token = response.data.token;
      localStorage.setItem("@user", token);
      useNavegate("/dashboard");
    } catch (error) {
      toast.error("Ops, algo deu errado! Tente novamente!");
      console.error(error);
      reset();
    }
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmitForm)}>
      <h1>Login</h1>
      <div className="form-inputs">
        <label htmlFor="name">Email</label>
        <input
          placeholder="Digite seu email"
          type="text"
          id="name"
          {...register("email")}
        />
        {errors.email?.message}

        <label htmlFor="password">Senha</label>
        <div className="input-password">
          <input
            placeholder="Digite seu email"
            type={passw ? "password" : "text"}
            id="password"
            {...register("password")}
          />
          {errors.password?.message}
          <button onClick={viewPassword}>
            <ImEye />
          </button>
        </div>

        <Link className="link" to={"/register"}>
          Ainda não possui uma conta?
        </Link>
        <button type="submit">Entrar</button>
        <Link className="link-register" to={"/register"}>
          Cadastre-se
        </Link>
      </div>
    </FormStyle>
  );
}
