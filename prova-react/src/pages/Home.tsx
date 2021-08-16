import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Form from "../components/FormSignIn";

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
