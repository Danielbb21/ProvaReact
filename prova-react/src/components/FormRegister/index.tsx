import React, { useState } from "react";
import useForm from "../../hooks/use-form";
import Input from "../Input";
import { useHistory } from "react-router";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import ButtonForm from "../ButtonForm";
import {useAppDispatch, useAppSelector} from '../../store/store-hooks';
import {registerUser} from '../../store/UserSlice';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ButtonAndForm,
  ErrorMessage,
  FormTitle,
  FormWrapper,
} from "../FormSignIn/style";



const FormRegister: React.FC = (props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const users = useAppSelector(state =>  state.user.users);
  
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
  
  const verifyUser = (email: string) =>{
      const emailExits = users.find(user => user.email === email);
      if(emailExits){
        return true;
      }
  }

  const submitLoginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsClicked(true);
    if (formIsValid) {
      
      setIsClicked(false);
      const user = {
        id: Math.random().toString(),
        email: enteredEmail,
        name: enteredName,
        password: enteredPassword
      };

      let userAlreadyBeeingInUse = verifyUser(user.email);
      if(userAlreadyBeeingInUse){
       
        toast.error('This Email is already been in use', {position: toast.POSITION.TOP_CENTER, autoClose: 1500});
        return;
      }
      dispatch(registerUser(user));
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
