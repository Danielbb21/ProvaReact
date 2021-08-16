import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import FormForgot from "../components/FormForget";


import Logo from "../components/Logo";

const HomeWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-evenly;
  /* height: 50vh; */
  width: 100%;
  flex: 1;

  margin-top: 15.4rem;
  @media(max-width: 700px) {
    flex-direction: column;
    flex: 1;
    margin: 0 auto;
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
