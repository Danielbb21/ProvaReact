import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import FormRegister from "../components/FormRegister";


import Logo from "../components/Logo";

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 35vw;


  @media(max-width: 800px) {
    flex-direction: column;
    
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
