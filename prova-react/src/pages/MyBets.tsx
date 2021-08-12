import React from "react";
import FilterGame from "../components/FilterGame";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



const MyBets: React.FC = () => {

  return (
    <>
      <Navbar />
        <FilterGame />
        <Footer/>
     
    </>
  );
};

export default MyBets;
