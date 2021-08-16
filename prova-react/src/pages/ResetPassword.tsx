import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Footer from "../components/Footer";
import FormForgot from "../components/FormForget";


import Logo from "../components/Logo";



const ResetPassword: React.FC = () => {
  return (
    <>
      <Card>
        <Logo />
        <FormForgot />
        
      </Card>
      {/* <Footer /> */}
    </>
  );
};

export default ResetPassword;
