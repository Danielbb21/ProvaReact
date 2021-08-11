import React from "react";
import Input from "../Input";
import { ButtonAndForm, FormButon, FormText, FormTitle, FormWrapper } from "./style";

const Form: React.FC = () => {
  return (
    <ButtonAndForm>
        <FormTitle>Authentication</FormTitle>
      <FormWrapper>
        <Input type="email" text="Email" />
        <Input type="password" text="Password" />
        <FormText to="/">I forget my password</FormText>
        <FormButon color="#B5C401" position = 'ok'>Log In</FormButon>
      </FormWrapper>
      <FormButon>Sigin Up</FormButon>
    </ButtonAndForm>
  );
};

export default Form;
