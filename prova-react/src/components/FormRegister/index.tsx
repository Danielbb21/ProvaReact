import React, { useState } from "react";
import useForm from "../../hooks/use-form";
import Input from "../Input";
import { useHistory } from "react-router";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import ButtonForm from "../ButtonForm";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ButtonAndForm,
  ErrorMessage,
  FormTitle,
  FormWrapper,
} from "../FormSignIn/style";
import axios from "axios";
import Loader from "../Loader";



const FormRegister: React.FC = (props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  
  const [isLoadding, setIsLoading] = useState<boolean>(false);

  // const users = useAppSelector(state =>  state.user.users);
  
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
      setIsLoading(true);
      axios.post('http://127.0.0.1:3333/user', {name: enteredName, email: enteredEmail, password: enteredPassword})
          .then(reposne => {
            console.log('finalizado');
            setIsLoading(false);
            console.log(reposne.data);
            toast.success('User creater', {position: toast.POSITION.TOP_RIGHT, autoClose: 1000});
            history.push("/");
          })
          .catch(err =>{
            setIsLoading(false);
            toast.error('Sommeting went wrong', {position: toast.POSITION.TOP_CENTER, autoClose: 1500});
            console.log(err.message);
            return 
          })
      setIsClicked(false);
      
      return;
    }
  };

  const returnPageHandler = () => {
    history.push("/");
  };
  return (
    <ButtonAndForm>
      <FormTitle>Registration</FormTitle>
        {isLoadding && <Loader />}
      <FormWrapper size={90} onSubmit={submitLoginHandler} >
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
        <span>Back</span>
      </ButtonForm>
    </ButtonAndForm>
  );
};

export default FormRegister;
