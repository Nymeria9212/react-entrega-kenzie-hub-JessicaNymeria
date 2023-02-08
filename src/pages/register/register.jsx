import { Link } from "react-router-dom";
import { FormRegister } from "../../components/formRegister/formRegister";
import { Header } from "../../components/Header/header";
import { PageRegister } from "./registerStyle";

export function Register() {
  return (
    <PageRegister>
      <Header Children={<Link to={"/"}>Voltar</Link>} />

      <FormRegister />
    </PageRegister>
  );
}
