import React from "react";
import Logo from "../../assets/img/logo.svg";
import Bag from "../../assets/img/bag.svg";
import {
  StyledRegister,
  StyledRegisterContainer,
  StyledRegisterSide,
  StyledRegisterSideLogo,
  StyledRegisterSideInfo,
  StyledRegisterSideInfoSpan,
  StyledRegisterSideInfoMessage,
  StyledRegisterSideInfoMessageSpan,
  StyledRegisterForm,
  StyledRegisterTop,
  StyledRegisterTitle,
  StyledRegisterLoginButton,
  StyledRegisterLabelName,
  StyledRegisterLabelEmail,
  StyledRegisterInputName,
  StyledRegisterInputEmail,
  StyledRegisterInputPassword,
  StyledRegisterInputRptPassword,
  StyledRegisterButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../provider/UserContext";
import { Link } from "react-router-dom";
import { SubmitHandler } from "react-hook-form/dist/types/form";

export interface iRegisterFormValues{
  name: string;
  email: string;
  password: string;
  rptpassword: string;
}

export const Register = () => {
  const navigate = useNavigate();
  const { loading, userRegister } = useContext(UserContext);

  const registerSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório!"),
    email: yup
      .string()
      .required("O e-mail é obrigatório!")
      .email("Um e-mail válido precisa ser informado"),
    password: yup
      .string()
      .required("A senha é obrigatória!"),
    rptpassword: yup
      .string()
      .required("A senha é obrigatória!")
      .min(6, "A senha deve contar no mínimo 6 (seis) caracteres")
      .oneOf([yup.ref("password")], "As senhas não correspondem!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormValues>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iRegisterFormValues> = async (data) => {
    
    await userRegister(data);

    reset();
    navigate("/");
  };

  return (
    <StyledRegister>
      <StyledRegisterContainer>
        <StyledRegisterSide>
          <StyledRegisterSideLogo>
            <img src={Logo} alt="Logo"></img>
          </StyledRegisterSideLogo>
          <StyledRegisterSideInfo>
            <StyledRegisterSideInfoSpan>
              <img src={Bag} alt="icone"></img>
            </StyledRegisterSideInfoSpan>
            <StyledRegisterSideInfoMessage>
              A vida é como um sanduíche, é preciso recheá-la com os{" "}
              <StyledRegisterSideInfoMessageSpan>
                melhores
              </StyledRegisterSideInfoMessageSpan>{" "}
              ingredientes.
            </StyledRegisterSideInfoMessage>
          </StyledRegisterSideInfo>
        </StyledRegisterSide>
        <StyledRegisterForm onSubmit={handleSubmit(submit)} noValidate>
        <StyledRegisterTop>
        <StyledRegisterTitle>Cadastro</StyledRegisterTitle>
        <Link to="/">
        <StyledRegisterLoginButton>Retornar para o login</StyledRegisterLoginButton>
        </Link>
        </StyledRegisterTop>
        <StyledRegisterLabelName>Nome</StyledRegisterLabelName>
        <StyledRegisterInputName type="text" id="name" placeholder="Digite aqui seu nome" {...register("name")}></StyledRegisterInputName>
        {errors.name?.message && <p>{errors.name.message}</p>}
        <StyledRegisterLabelEmail>Email</StyledRegisterLabelEmail>
        <StyledRegisterInputEmail type="email" id="email" placeholder="Digite aqui seu email" {...register("email")}></StyledRegisterInputEmail>
        {errors.email?.message && <p>{errors.email.message}</p>}
        <StyledRegisterInputPassword type="password" id="password" placeholder="Digite aqui sua senha" {...register("password")}></StyledRegisterInputPassword>
        {errors.password?.message && <p>{errors.password.message}</p>}
        <StyledRegisterInputRptPassword type="password" id="password" placeholder="Digite novamente sua senha" {...register("rptpassword")}></StyledRegisterInputRptPassword>
        {errors.rptpassword?.message && <p>{errors.rptpassword.message}</p>}
        <StyledRegisterButton type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
        </StyledRegisterButton>
        </StyledRegisterForm>
      </StyledRegisterContainer>
    </StyledRegister>
  );
};