import { Link } from "react-router-dom";
import { RegisterStyle } from "./formRegisterStyle";

export function FormRegister() {
  return (
    <RegisterStyle>
      <h1>Crie sua conta</h1>
      <p>Rápido e grátis, vamos nessa</p>
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" />

      <label htmlFor="">Email</label>
      <input type="text" />

      <label htmlFor="">Senha</label>
      <input type="text" />

      <label htmlFor="">Confirmar senha</label>
      <input type="text" />

      <label htmlFor="">Bio</label>
      <input type="text" />

      <label htmlFor="">Contato</label>
      <input type="text" />

      <label htmlFor="module">Selecionar módulo</label>
      <select name="" id="module">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <Link>Cadastrar</Link>
    </RegisterStyle>
  );
}
