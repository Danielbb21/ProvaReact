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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../Loader";

interface FormProps {
  isRegister?: boolean;
}

const FormForgot: React.FC<FormProps> = (props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      setIsLoading(true);
      axios
        .post("http://127.0.0.1:3333/passwords", {
          email: enteredEmail,
          redirect_url: "http://localhost:3000/reset",
        })
        .then((response) => {
          setIsLoading(false);
          
          toast.success('A email was sended to your account', {position: toast.POSITION.TOP_RIGHT, autoClose: 1500});
          history.replace('/');
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
          toast.error('Sommeting Went Wrong', {position: toast.POSITION.TOP_CENTER, autoClose: 1500});
          return;
        });
    }
  };

  const returnPageHandler = () => {
    history.push("/");
  };

  return (
    <>
      <ButtonAndForm>
        <FormTitle>Reset Password</FormTitle>
        {isLoading && <Loader />}
        <FormWrapper
          onSubmit={submitForgotPasswordHandler}
          size={35}
          isRegister={props.isRegister}
        >
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
        <ButtonForm handleClick={returnPageHandler}>
          <VscArrowLeft />
          Back
        </ButtonForm>
      </ButtonAndForm>
    </>
  );
};

export default FormForgot;
