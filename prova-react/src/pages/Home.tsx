import React, { useEffect } from "react";
import Card from "../components/Card";
import Form from "../components/FormSignIn";
import Logo from "../components/Logo";
import axios from "axios";
import { useAppSelector } from "../store/store-hooks";



const Home: React.FC = () => {
  const user = useAppSelector(state => state.user);
  console.log('USER', user);
  
  useEffect(()=>{
    const teste = async() =>{
      axios.get('http://127.0.0.1:3333/users')
        .then(response => {
          console.log(response.data);
        })
    }
    teste();
  }, [])
  
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
