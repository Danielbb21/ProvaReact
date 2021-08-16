import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/store-hooks";

interface ParamTypes {
  id: string;
}

interface UserInterface {
  id: string;
  email: string;
  name: string;
  password: string;
}

interface CartInterface {
  id: string;
  typeGame: string;
  price: number;
  color: string;
  numbers: number[];
  date?: string;
  user_id: string;
}

const getUserInfo = (users: UserInterface[], id: string) => {
  return users.find((user) => user.id === id);
};
const getCartOfTheUser = (cart: CartInterface[], id: string) => {
  return cart.filter((items) => items.user_id === id);
};

const Account: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const users = useAppSelector((state) => state.user.users);
  const cartRedux = useAppSelector((state) => state.cart.items);

  const userInfo = getUserInfo(users, id);
  const cartInfo = getCartOfTheUser(cartRedux, id);
  
 let totalMoney = 0;
 
 cartInfo.forEach(item =>{
     totalMoney += item.price;
 });

 const formatMoneyToBepresented = (money: number) =>{
     return money.toFixed(2).toString().replace('.', ',');
 }
 const money = formatMoneyToBepresented(totalMoney);

  return (
    <>
      <h1>Email: {userInfo?.email}</h1>
      <h1>Nome: {userInfo?.name}</h1>
      <h1>Total Of Games: {cartInfo.length}</h1>
      <h1>Total Gasto: R$ {money}</h1>
    </>
  );
};

export default Account;
