import { Link } from "react-router-dom";
import { ImEye } from "react-icons/im";
import { FormStyle } from "./formLoginStyle";

export function FormLogin() {
  return (
    <FormStyle>
      <h1>Login</h1>
      <div className="form-inputs">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" />
        <label htmlFor="password">Senha</label>
        <div className="input-password">
          <input type="text" id="passwor" />
          <button>
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
