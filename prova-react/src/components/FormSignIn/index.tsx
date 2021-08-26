import React, { useState } from "react";
import useForm from "../../hooks/use-form";
import Input from "../Input";

import { VscArrowRight } from "react-icons/vsc";
import ButtonForm from "../ButtonForm";

import {
  ButtonAndForm,
  ErrorMessage,
  FormText,
  FormTitle,
  FormWrapper,
} from "./style";
import { useHistory } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";
import { useAppDispatch, useAppSelector } from "../../store/store-hooks";
import {  logUser} from '../../store/UserSlice';

const Form: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user.isLoggedIn);
  
  
  if(user){
    history.replace('my-bets');
  }
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

  const submitLoginHandler =  async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsClicked(true);
    if (formIsValid) {
     
      
     dispatch(logUser( enteredEmail,enteredPassword));

      
      
        
      setIsClicked(false);
    }
  };

  const redirectToRegisterPageHandler = () => {
    history.push("/register");
  };

  return (
    <ButtonAndForm>
      <FormTitle>Authentication</FormTitle>
      {isLoading && <Loader />}
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
