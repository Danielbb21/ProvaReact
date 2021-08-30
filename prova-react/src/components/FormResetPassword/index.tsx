import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useForm from "../../hooks/use-form";
import ButtonForm from "../ButtonForm";
import {
  ButtonAndForm,
  ErrorMessage,
  FormTitle,
  FormWrapper,
} from "../FormSignIn/style";
import Input from "../Input";



const FormResetPassword: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const token = queryParams.get("token");
  
  const {
    value: enteredPassword,
    changeValueHandler: changePasswordHandler,
    hasError: passwordError,
    isValid: passwordIsValid,
  } = useForm((value) => value.trim().length >= 6);

  const {
    value: enteredConfirmPassword,
    changeValueHandler: changeConfirmPasswordHandler,
    hasError: passwordConfirmError,
    isValid: passwordConfirmIsValid,
  } = useForm((value) => value.trim().length >= 6);

  const formIsValid = passwordConfirmIsValid && passwordIsValid;

  const submitUserPasswordChange = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsClicked(true);
    if (formIsValid) {
      setIsClicked(false);
      if (enteredPassword !== enteredConfirmPassword) {
      

        toast.error("Password aren't identical", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      } else {
        axios.put('http://127.0.0.1:3333/passwords/reset', {
          token: token,
          password: enteredPassword,
          password_confirmation: enteredConfirmPassword
        })
        .then(response => {
          toast.success("Password Changed", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
          });
          history.replace("/");
        })
        .catch(err => {
          toast.error("Sommeting went wrong", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
        })
       

        
      }
    }
  };

  return (
    <ButtonAndForm>
      <FormTitle>Reset Password</FormTitle>
      <FormWrapper size={60} onSubmit={submitUserPasswordChange}>
        <Input
          type="password"
          text="New Password"
          onChange={changePasswordHandler}
          value={enteredPassword}
        />
        {passwordError && isClicked && (
          <ErrorMessage>Password invalid</ErrorMessage>
        )}
        <Input
          type="password"
          text="Confirm Password"
          onChange={changeConfirmPasswordHandler}
          value={enteredConfirmPassword}
        />
        {passwordConfirmError && isClicked && (
          <ErrorMessage>Password invalid</ErrorMessage>
        )}

        <ButtonForm color="#B5C401" position="ok">
          <span>Change Password</span>
        </ButtonForm>
      </FormWrapper>
    </ButtonAndForm>
  );
};

export default FormResetPassword;
