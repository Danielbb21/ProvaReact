import React from "react";
import { useAppSelector } from "../../store/store-hooks";
import Navbar from "../Navbar";
import { UserInfoTitle, UserInfoWrapper, UserLabel } from "./style";
import gameInfo from "../../games.json";
import ActionButton from "../ActionButton";
import { useState } from "react";

interface UserinfoProps {
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

interface UserGame {
  type: string;
  quantity: number;
  price: number | null;
}

const UserInfo: React.FC<UserinfoProps> = (props) => {
  const users = useAppSelector((state) => state.user.users);
  const cartItems = useAppSelector((state) => state.cart.items);
  const typesOfGame = gameInfo.types.map((game) => game.type);
  const userGameInfo: UserGame[] = [];
  const [perPrice, setPerPrice] = useState<boolean>(false);
  const userInfo = getUserInfo(users, props.id);
  const cartInfo = getCartOfTheUser(cartItems, props.id);

  const perPriceHandler = () => {
    setPerPrice(previus => !previus);
  };

  const checkPrice = (typeGame: string  | null | undefined): number => {
    if (typeGame) {
      const gameValue = cartInfo.find(
        (cart) => cart.typeGame === typeGame
      )?.price;
      if(gameValue){
        return gameValue;
      }
      return 0;
     
    }
    return 0;
  };
  typesOfGame.forEach((game) => {
      let price = checkPrice(game);
      let quantity = cartInfo.filter((cart) => cart.typeGame === game).length;
    userGameInfo.push({
      type: game,
      quantity: quantity,
      price: price * quantity
    });
  });
  

  return (
    <>
      <Navbar hasHome={true} id={props.id} hasNav={true} />
      <UserInfoWrapper>
        <UserInfoTitle>Your information</UserInfoTitle>
        <UserLabel>
          Email: <span>{userInfo?.email}</span>
        </UserLabel>
        <UserLabel>
          Nome: <span>{userInfo?.name}</span>
        </UserLabel>
        <UserInfoTitle>{!perPrice? "Number of games per game type" : 'Value spent in each type of game'}</UserInfoTitle>
        {userGameInfo.map((user) => {
          return (
            <UserLabel>
              {user.type}:  <span>{!perPrice? user.quantity: `R$ ${user.price?.toFixed(2).toString().replace('.', ',')}`}</span>
            </UserLabel>
          );
        })}
        <ActionButton
          hei={6.4}
          win={11.5}
          border="#01AC66"
          backgroung="#01AC66"
          end={true}
          onAction={perPriceHandler}
        >
          {!perPrice ? "Get by price" : 'Get by quantity'}
        </ActionButton>
      </UserInfoWrapper>
    </>
  );
};

export default UserInfo;
