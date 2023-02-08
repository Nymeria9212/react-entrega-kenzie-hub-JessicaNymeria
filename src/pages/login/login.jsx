import { FormLogin } from "../../components/formLogin/formLogin";
import { Header } from "../../components/Header/header";
import { PageLogin } from "./loginStyle";

export function Login() {
  return (
    <PageLogin>
      <Header />
      <FormLogin />
    </PageLogin>
  );
}
