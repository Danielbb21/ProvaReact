import React, { useEffect } from "react";
import Card from "../components/Card";
import Form from "../components/FormSignIn";
import Logo from "../components/Logo";
import axios from "axios";
import { useAppSelector } from "../store/store-hooks";



const Home: React.FC = () => {
 
  
  return (
    <>
      <Card>
        <Logo />
        <Form />
        
      </Card>
      
    </>
  );
};

export default Home;
