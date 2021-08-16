import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Footer from "../components/Footer";
import FormRegister from "../components/FormRegister";


import Logo from "../components/Logo";



const Register: React.FC = () => {
  return (
    <>
      <Card>
        <Logo />
        <FormRegister />
        
      </Card>
      {/* <Footer /> */}
    </>
  );
};

export default Register;
