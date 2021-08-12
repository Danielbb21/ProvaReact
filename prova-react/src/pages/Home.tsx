import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Form from "../components/FormSignIn";

import Logo from "../components/Logo";

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 35vw;
  flex: 1;


  @media(max-width: 800px) {
    flex-direction: column;
    
  }
  
`;

const Home: React.FC = () => {
  return (
    <>
      <HomeWrapper>
        <Logo />
        <Form />
        
      </HomeWrapper>
      <Footer />
    </>
  );
};

export default Home;
