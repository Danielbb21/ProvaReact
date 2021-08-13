import React from "react";
import { useParams } from "react-router-dom";
import FilterGame from "../components/FilterGame";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAppSelector } from "../store/store-hooks";

interface ParamTypes{
  id: string;
}

const MyBets: React.FC = () => {
  const users = useAppSelector(state => state.user.users);
  const {id} = useParams<ParamTypes>();
  console.log(users)
  console.log(id);
  const user = users.find(us => us.id === id);
  console.log(user);
  return (
    <>
      <Navbar hasHome = {false} id= {id}/>
        <FilterGame id = {id}/>
        {/* <Footer/> */}
     
    </>
  );
};

export default MyBets;
