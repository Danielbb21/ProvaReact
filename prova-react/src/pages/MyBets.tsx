import React, { useEffect } from "react";

import {  useParams } from "react-router-dom";
import FilterGame from "../components/FilterGame";
import Navbar from "../components/Navbar";


interface ParamTypes{
  id: string;
}

const MyBets: React.FC = () => {
  
  const {id} = useParams<ParamTypes>();

 
  return (
    <>
      <Navbar hasHome = {false} id= {id}/>
        <FilterGame id = {id}/>
        {/* <Footer/> */}
     
    </>
  );
};

export default MyBets;
