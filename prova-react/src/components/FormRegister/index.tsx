import React, { useState } from "react";
import useForm from "../../hooks/use-form";
import Input from "../Input";
import { useHistory } from "react-router";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import ButtonForm from "../ButtonForm";

import {
  ButtonAndForm,
  ErrorMessage,
  FormTitle,
  FormWrapper,
} from "../FormSignIn/style";

const FormRegister: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const history = useHistory();

  const {
    value: enteredEmail,
    changeValueHandler: changeEmailHandler,
    hasError: emailError,
    isValid: emailIsValid,
  } = useForm((value) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
  );

  const {
    value: enteredPassword,
    changeValueHandler: changePasswordHandler,
    hasError: passwordError,
    isValid: passwordIsValid,
  } = useForm((value) => value.trim().length >= 6);

  const {
    value: enteredName,
    changeValueHandler: changeNameHandler,
    hasError: nameError,
    isValid: nameIsValid,
  } = useForm((value) => value.trim().length !== 0);

  const formIsValid = emailIsValid && passwordIsValid && nameIsValid;

  const submitLoginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsClicked(true);
    if (formIsValid) {
      console.log("Valid");
      setIsClicked(false);
      history.push("/");
      return;
    }
  };

  const returnPageHandler = () => {
    history.push("/");
  };
  return (
    <ButtonAndForm>
      <FormTitle>Registration</FormTitle>
      <FormWrapper size={90} onSubmit={submitLoginHandler}>
        <Input
          type="text"
          text="Name"
          onChange={changeNameHandler}
          value={enteredName}
        />
        {nameError && isClicked && <ErrorMessage>Nome invalido</ErrorMessage>}

        <Input
          type="email"
          text="Email"
          onChange={changeEmailHandler}
          value={enteredEmail}
        />
        {emailError && isClicked && <ErrorMessage>Email Invalido</ErrorMessage>}
        <Input
          type="password"
          text="Password"
          onChange={changePasswordHandler}
          value={enteredPassword}
        />
        {passwordError && isClicked && (
          <ErrorMessage>Password Invalido</ErrorMessage>
        )}

        <ButtonForm color="#B5C401" position="ok">
          <span>Register</span>
          <VscArrowRight />
        </ButtonForm>
      </FormWrapper>
      <ButtonForm handleClick={returnPageHandler}>
        <VscArrowLeft />
        Back
      </ButtonForm>
    </ButtonAndForm>
  );
};

export default FormRegister;
