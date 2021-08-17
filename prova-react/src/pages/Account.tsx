import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import UserInfo from "../components/UserInfo";


interface ParamTypes {
  id: string;
}



const Account: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  

  return (
    <>
    <UserInfo id = {id}>
     
    </UserInfo>
    </>
  );
};

export default Account;
