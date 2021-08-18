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
import { useAppSelector } from "../../store/store-hooks";

interface FormProps{
  isRegister?: boolean;
}

const FormForgot: React.FC<FormProps> = (props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const users = useAppSelector((state) => state.user.users);
  const [hasError, setHasError] = useState<boolean>(false);
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

  const validateEmail = (email: string): boolean => {
    const emailExists = users.find((user) => user.email === email);
    if (!emailExists) {
      return false;
    }
    return true;
  };

  const submitForgotPasswordHandler = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsClicked(true);
    if (formIsValid) {
      let emailExist = validateEmail(enteredEmail);
      if (!emailExist) {
        setHasError(true);
      }
      else{
        setHasError(false);
        history.push('/');
      }
    }
  };

  const returnPageHandler = () => {
    history.push("/");
  };

  return (
    <>
      <ButtonAndForm>
        <FormTitle>Reset Password</FormTitle>
        <FormWrapper onSubmit={submitForgotPasswordHandler} size={35} isRegister = {props.isRegister}>
          <Input
            type="email"
            text="Email"
            onChange={changeEmailHandler}
            value={enteredEmail}
          />
          {emailError && isClicked && (
            <ErrorMessage>Email incorreto</ErrorMessage>
          )}
          { enteredEmail.length > 0 && hasError && <ErrorMessage>Email Not Found</ErrorMessage>}
          <ButtonForm color="#B5C401" position="ok">
            <span>Send Link</span>
            <VscArrowRight />
          </ButtonForm>
        </FormWrapper>
        <ButtonForm handleClick={returnPageHandler}>
          <VscArrowLeft />
          Back
        </ButtonForm>
      </ButtonAndForm>
    </>
  );
};

export default FormForgot;
