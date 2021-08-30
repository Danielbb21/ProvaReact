import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../store/store";
import { useAppSelector } from "../../store/store-hooks";
import { getUserInfo } from "../../store/UserSlice";
import ActionButton from "../ActionButton";
import { FormTitle } from "../FormSignIn/style";
import Input from "../Input";
import Navbar from "../Navbar";
import { UserInfoWrapper } from "../UserInfo/style";
import { FieldTitle } from "./style";

const UserInfoComponnent: React.FC = (props) => {
  const token = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.info);

  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] =
    useState<string>("");
  const emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
    enteredEmail
  );
  const nameValid = enteredName.trim().length !== 0;
  const passwordValid = enteredPassword.trim().length >= 6;
  const passwordConfirmValid = enteredConfirmPassword.trim().length >= 6;
  const formIsValid =
    nameValid && emailValid && passwordValid && passwordConfirmValid;
  const history = useHistory();

  useEffect(() => {
    if (token) {
      dispatch(getUserInfo(token));
      setEnteredName(user.name);
      setEnteredEmail(user.email);
    }
  }, [token, dispatch, user.name, user.email]);

  const updateUserDataHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formIsValid) {
      if (enteredConfirmPassword !== enteredPassword) {
        toast.error("Password doen´t match", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        return;
      }
      axios
        .put(
          "http://127.0.0.1:3333/user",
          {
            email: enteredEmail,
            password: enteredPassword,
            password_confirmation: enteredConfirmPassword,
            name: enteredName,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
          toast.success("Updated information", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
          });
          history.push("/account");
        })
        .catch((err) => {
          if (err.message === "Request failed with status code 400") {
            toast.error("Email already in use", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500,
            });
          } else {
            toast.error("Sommeting went wrong", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500,
            });
          }
        });
    } else {
      toast.error("Invalid Field", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    }
  };

  return (
    <>
      <Navbar hasHome={true} id={Math.random().toString()} hasNav={false} />
      <form onSubmit={updateUserDataHandler}>
        <UserInfoWrapper hei={70} wid={50}>
          <FormTitle>Update your information</FormTitle>

          <FieldTitle>Name</FieldTitle>
          <Input
            type="text"
            text="New Name"
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
          />
          <FieldTitle>Email</FieldTitle>
          <Input
            type="email"
            text="New Email"
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
          />
          <FieldTitle> New Password</FieldTitle>
          <Input
            type="password"
            text="New Password"
            onChange={(event) => setEnteredPassword(event.target.value)}
          />
          <FieldTitle> Confirm New Password</FieldTitle>
          <Input
            type="password"
            text="Confirm New Password"
            onChange={(event) => setEnteredConfirmPassword(event.target.value)}
          />
          <br />
          <ActionButton
            hei={6.4}
            win={11.5}
            border="#01AC66"
            backgroung="#01AC66"
          >
            Save
          </ActionButton>
        </UserInfoWrapper>
      </form>
    </>
  );
};

export default UserInfoComponnent;
