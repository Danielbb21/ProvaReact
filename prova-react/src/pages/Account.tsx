import React from "react";
import { useHistory, useParams } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import { useAppSelector } from "../store/store-hooks";


interface ParamTypes {
  id: string;
}



const Account: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const users = useAppSelector(state => state.user.users);
  const history = useHistory();
  const userFond = users.find(user=>user.id === id);
  if(!userFond){
    history.replace('/');
  }

  return (
    <>
    <UserInfo id = {id}>
     
    </UserInfo>
    </>
  );
};

export default Account;
