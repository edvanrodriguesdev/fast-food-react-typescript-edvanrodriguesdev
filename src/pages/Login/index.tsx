import React from "react";
import Logo from "../../assets/img/logo.svg";
import Bag from "../../assets/img/bag.svg";
import {
  StyledLogin,
  StyledLoginContainer,
  StyledLoginForm,
  StyledLoginTitle,
  StyledLoginLabelName,
  StyledLoginLabelPassword,
  StyledLoginInputName,
  StyledLoginInputPassword,
  StyledLoginButton,
  StyledLoginMessage,
  StyledLoginRegister,
  StyledLoginSide,
  StyledLoginSideLogo,
  StyledLoginSideInfo,
  StyledLoginSideInfoSpan,
  StyledLoginSideInfoMessage,
  StyledLoginSideInfoMessageSpan,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../provider/UserContext";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { CartContext } from "../../provider/CartContext";

export interface iLoginFormValues{
  email: string;
  password: string;
}


export const Login = () => {
  const navigate = useNavigate();
  const { loading, userLogin } = useContext(UserContext);


  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("O email é obrigatório!")
      .email("Um e-mail válido precisa ser informado"),
    password: yup.string().required("A senha é obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iLoginFormValues>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginFormValues> = async (data) => {
    userLogin(data);
    reset();
    
    navigate("/dashboard");
  };

  return (
    <StyledLogin>
      <StyledLoginContainer>
        <StyledLoginForm onSubmit={handleSubmit(submit)} noValidate>
          <StyledLoginTitle>Login</StyledLoginTitle>
          <StyledLoginLabelName>Email</StyledLoginLabelName>
          <StyledLoginInputName type="text" id="email" placeholder="Digite aqui seu email" {...register("email")}></StyledLoginInputName>
          {errors.email?.message && <p>{errors.email.message}</p>}
          <StyledLoginLabelPassword>Senha</StyledLoginLabelPassword>
          <StyledLoginInputPassword type="password" id="password" placeholder="Digite aqui sua senha" {...register("password")}></StyledLoginInputPassword>
          {errors.password?.message && <p>{errors.password.message}</p>}
          <StyledLoginButton type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Logar"}
          </StyledLoginButton>
          <StyledLoginMessage>
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </StyledLoginMessage>
          <Link to="/register">
          <StyledLoginRegister>Cadastrar</StyledLoginRegister>
          </Link>
        </StyledLoginForm>
        <StyledLoginSide>
          <StyledLoginSideLogo>
            <img src={Logo} alt="Logo"></img>
          </StyledLoginSideLogo>
          <StyledLoginSideInfo>
            <StyledLoginSideInfoSpan>
              <img src={Bag} alt="icone"></img>
            </StyledLoginSideInfoSpan>
            <StyledLoginSideInfoMessage>
              A vida é como um sanduíche, é preciso recheá-la com os{" "}
              <StyledLoginSideInfoMessageSpan>
                melhores
              </StyledLoginSideInfoMessageSpan>{" "}
              ingredientes.
            </StyledLoginSideInfoMessage>
          </StyledLoginSideInfo>
        </StyledLoginSide>
      </StyledLoginContainer>
    </StyledLogin>
  );
};