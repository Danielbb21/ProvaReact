import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import FormForgot from "../components/FormForget";


import Logo from "../components/Logo";

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 35vw;


  @media(max-width: 800px) {
    flex-direction: column;
    /* position: relative; */
  }
  
`;

const ResetPassword: React.FC = () => {
  return (
    <>
      <HomeWrapper>
        <Logo />
        <FormForgot />
        
      </HomeWrapper>
      <Footer />
    </>
  );
};

export default ResetPassword;
