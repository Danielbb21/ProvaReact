import React, { useState } from "react";
import {
  ButtonAndForm,
  ErrorMessage,
  FormTitle,
  FormWrapper,
} from "../FormSignIn/style";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import ButtonForm from "../ButtonForm";

import Input from "../Input/index";
import useForm from "../../hooks/use-form";
import { useHistory } from "react-router";

const FormForgot: React.FC = () => {
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

  const formIsValid = emailIsValid;

  const submitForgotPasswordHandler = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsClicked(true);
    if (formIsValid) {
      return;
    }
  };

  const returnPageHandler =() =>{
    history.push('/');
  };

  return (
    <>
      <ButtonAndForm>
        <FormTitle>Reset Password</FormTitle>
        <FormWrapper onSubmit={submitForgotPasswordHandler} size={35}>
          <Input
            type="email"
            text="Email"
            onChange={changeEmailHandler}
            value={enteredEmail}
          />
          {emailError && isClicked && (
            <ErrorMessage>Email incorreto</ErrorMessage>
          )}
          <ButtonForm color="#B5C401" position="ok">
            <span>Send Link</span>
            <VscArrowRight />
          </ButtonForm>
        </FormWrapper>
        <ButtonForm handleClick = {returnPageHandler}>
          <VscArrowLeft />
          Back
        </ButtonForm>
      </ButtonAndForm>
    </>
  );
};

export default FormForgot;
