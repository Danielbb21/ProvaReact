import React, { useState } from "react";
import useForm from "../../hooks/use-form";
import Input from "../Input";

import { VscArrowRight } from "react-icons/vsc";
import ButtonForm from "../ButtonForm";
import { useAppSelector } from "../../store/store-hooks";

import {
  ButtonAndForm,
  ErrorMessage,
  FormText,
  FormTitle,
  FormWrapper,
} from "./style";
import { useHistory } from "react-router";

const Form: React.FC = () => {
  const users = useAppSelector((state) => state.user.users);
  const [hasError, setHasError] = useState(false);
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

  const formIsValid = emailIsValid && passwordIsValid;

  const checkUserNotExists = (email: string, password: string): boolean => {
    

    const emailExists = users.find((user) => user.email === email);
    
    if (emailExists) {
      const passwordMatch = emailExists.password === password;
      
      if (passwordMatch) {
        return false;
      }
    }
      return true;
    
  };

  const submitLoginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsClicked(true);
    if (formIsValid) {
      
      setIsClicked(false);
      const isUserValid = checkUserNotExists(enteredEmail, enteredPassword)
      setHasError(isUserValid);
      if(!isUserValid){
        const userId= users.find(user => user.email === enteredEmail);
        history.replace(`/my-bets/${userId?.id}`);
      }
    }
  };

  const redirectToRegisterPageHandler = () => {
    history.push("/register");
  };

  return (
    <ButtonAndForm>
      <FormTitle>Authentication</FormTitle>
      <FormWrapper size={60} onSubmit={submitLoginHandler}>
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
        <FormText to="/forget">I forget my password</FormText>
        { hasError && (
          <ErrorMessage>Email password combination is wrong</ErrorMessage>
        )}
        <ButtonForm color="#B5C401" position="ok">
          <span>Log In</span>
          <VscArrowRight />
        </ButtonForm>
      </FormWrapper>
      <ButtonForm handleClick={redirectToRegisterPageHandler}>
        <span>Sign Up</span>
        <VscArrowRight />
      </ButtonForm>
    </ButtonAndForm>
  );
};

export default Form;
