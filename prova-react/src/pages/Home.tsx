import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Form from "../components/FormSignIn";

import Logo from "../components/Logo";


const Home: React.FC = () => {
  return (
    <>
      <Card>
        <Logo />
        <Form />
        
      </Card>
      {/* <Footer />   */}
    </>
  );
};

export default Home;
