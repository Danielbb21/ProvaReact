import React from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import FilterGame from "../components/FilterGame";
import Navbar from "../components/Navbar";
import { useAppDispatch, useAppSelector } from "../store/store-hooks";
import { getRecentGames, getUserInfo } from "../store/UserSlice";

interface ParamTypes{
  id: string;
}

const MyBets: React.FC = () => {
  // const users = useAppSelector(state => state.user.users);
  const {id} = useParams<ParamTypes>();
  const history = useHistory();

 
  // const userFond = users.find(user=>user.id === id);
  // if(!userFond){
  //   history.replace('/');
  // }
  
  return (
    <>
      <Navbar hasHome = {false} id= {id}/>
        <FilterGame id = {id}/>
        {/* <Footer/> */}
     
    </>
  );
};

export default MyBets;
