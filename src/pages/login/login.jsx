import { FormLogin } from "../../components/formLogin/formLogin";
import { PageLogin } from "./loginStyle";
import logoKenzie from "../../assets/Logo.svg";

export function Login() {
  return (
    <PageLogin>
      <header>
        <img src={logoKenzie} alt="" />
      </header>
      <FormLogin />
    </PageLogin>
  );
}
