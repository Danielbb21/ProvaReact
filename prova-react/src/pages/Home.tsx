import React from "react";
import styled from "styled-components";
import Form from "../components/Form";

import Logo from "../components/Logo";

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 35vw;
`;

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Logo />
      <Form />
    </HomeWrapper>
  );
};

export default Home;
