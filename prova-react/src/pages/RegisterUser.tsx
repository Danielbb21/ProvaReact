import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import FormRegister from "../components/FormRegister";


import Logo from "../components/Logo";

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  flex: 1;


  @media(max-width: 700px) {
    flex-direction: column;
    flex: 1;
    margin: 0 auto;
  }
  
`;

const Register: React.FC = () => {
  return (
    <>
      <HomeWrapper>
        <Logo />
        <FormRegister />
        
      </HomeWrapper>
      <Footer />
    </>
  );
};

export default Register;
