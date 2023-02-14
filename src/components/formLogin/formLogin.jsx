import { Link } from "react-router-dom";
import { ImEye } from "react-icons/im";
import { FormStyle } from "./formLoginStyle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { KenzieHubContext } from "../../Contexts";

const formSchema = yup.object({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export function FormLogin() {
  const { onSubmitForm } = useContext(KenzieHubContext);

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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

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
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Senha</label>
        <div className="input-password">
          <input
            placeholder="Digite seu email"
            type={passw ? "password" : "text"}
            id="password"
            {...register("password")}
          />
          <button onClick={viewPassword}>
            <ImEye />
          </button>
        </div>
        <p>{errors.password?.message}</p>
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
