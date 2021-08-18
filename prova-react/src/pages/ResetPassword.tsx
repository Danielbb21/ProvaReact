import React from "react";
import Card from "../components/Card";
import FormForgot from "../components/FormForget";


import Logo from "../components/Logo";



const ResetPassword: React.FC = () => {
  return (
    <>
      <Card>
        <Logo />
        <FormForgot isRegister = {true}/>
        
      </Card>
    </>
  );
};

export default ResetPassword;
