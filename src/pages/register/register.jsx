import { Link } from "react-router-dom";
import { FormRegister } from "../../components/formRegister/formRegister";
import { PageRegister } from "./registerStyle";
import logoKenzie from "../../assets/Logo.svg";
export function Register() {
  return (
    <PageRegister>
      <header>
        <div>
          <img src={logoKenzie} alt="Logomarca KenzieHub" />
          <Link className="backPage" to={"/"}>
            Voltar
          </Link>
        </div>
      </header>
      <FormRegister />
    </PageRegister>
  );
}
