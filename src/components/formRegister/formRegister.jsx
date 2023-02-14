import { Link, useNavigate } from "react-router-dom";
import { RegisterStyle } from "./formRegisterStyle";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";

const formSchema = yup
  .object({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup
      .string()
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
      .matches(/.{6,}/, "Deve conter no mínimo 6 caracteres")
      .required("Senha obrigatória"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas precisam ser iguais")
      .required("Conrfirmação de senha obrigatória"),
    bio: yup.string().required("Bio obrigatória. Digite pelo menos uma linha."),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Escolher um módulo é obrigatório"),
  })
  .required();
export function FormRegister() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const useNavegate = useNavigate();

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
    <RegisterStyle onSubmit={handleSubmit(onSubmitFunction)}>
      <h1>Crie sua conta</h1>
      <p>Rápido e grátis, vamos nessa</p>

      <label htmlFor="name">Nome</label>
      <input
        placeholder="Digite seu nome aqui..."
        type="text"
        id="name"
        {...register("name")}
      />
      <p>{errors.name?.message}</p>

      <label htmlFor="">Email</label>
      <input
        placeholder="Digite seu email aqui..."
        type="text"
        {...register("email")}
      />

      <label htmlFor="">Senha</label>
      <input
        type="password"
        placeholder="Digite sua senha aqui..."
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <label htmlFor="">Confirmar senha</label>
      <input
        placeholder="Digite novamente a senha aqui..."
        type="password"
        {...register("passwordConfirmation")}
      />

      <label htmlFor="">Bio</label>
      <input
        placeholder="Escreva sua bio aqui..."
        type="text"
        {...register("bio")}
      />

      <label htmlFor="">Contato</label>
      <input
        placeholder="Digite seu contato aqui..."
        type="text"
        {...register("contact")}
      />

      <label htmlFor="module">Selecionar módulo</label>
      <select name="" id="module" {...register("course_module")}>
        <option value="Módulo 1 - Front end inicial">
          Módulo 1 - Front end inicial
        </option>
        <option value="Módulo 2 - Front end avançado">
          Módulo 2 - Front end avançado
        </option>
        <option value="Módulo 3 - Front End (React)">
          Módulo 3 - Front End (React)
        </option>
        <option value="Módulo 4 - Back End">Módulo 4 - Back End</option>
        <option value="Módulo 5 - Back End avançado">
          Módulo 5 - Back End avançado
        </option>
        <option value="Módulo 6 - Projeto final">
          Módulo 6 - Projeto final
        </option>
      </select>
      <button className="btnRegister" type="submit">
        Cadastrar
      </button>
    </RegisterStyle>
  );
}
