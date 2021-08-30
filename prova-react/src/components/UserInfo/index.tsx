import React, { useEffect } from "react";
import { useAppSelector } from "../../store/store-hooks";
import Navbar from "../Navbar";
import {
  InfoWrapper,
  UserInfoTitle,
  UserInfoWrapper,
  UserLabel,
} from "./style";
import ActionButton from "../ActionButton";
import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { getUserInfo } from "../../store/UserSlice";
import { getGameData } from "../../store/GameSlice";

interface UserGame {
  type: string;
  quantity: number;
  price: number | null;
}

const UserInfo: React.FC = (props) => {
  // const users = useAppSelector((state) => state.user.users);

  const userGameInfo: UserGame[] = [];
  const [perPrice, setPerPrice] = useState<boolean>(false);
  const games = useAppSelector((state) => state.game.items);

  const token = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.info);

  useEffect(() => {
    const getUserData = () => {
      if (token) {
        
        dispatch(getUserInfo(token));
        dispatch(getGameData(token));
        
      }
    };

    getUserData();
  }, [token, dispatch]);

  

  const typeOfGames = games.map((game) => game.type);

  const perPriceHandler = () => {
    

    setPerPrice((previus) => !previus);
  };

  const checkPrice = (typeGame: string | null | undefined): number => {
    
    if (typeGame) {
      let price = 0;
      const gameValue = user.gambles.filter((cart) => {
        return cart["game"] ?  cart["game"]["type"] === typeGame: '';
          
        
      });
      gameValue.forEach((game) => {
        price += game["price"];
      });

      if (price) {
        return price;
      }
      return 0;
    }
    return 0;
  };

  typeOfGames.forEach((game) => {
    let price = checkPrice(game);

    let quantity = user.gambles.filter((cart) => {
      return cart["game"] ? cart["game"]["type"] === game : "";
    }).length;
    userGameInfo.push({
      type: game,
      quantity: quantity,
      price: price,
    });
  });

  return (
    <>
      <Navbar hasHome={true} id={Math.random().toString()} hasNav={true} />
      <UserInfoWrapper>
        <UserInfoTitle>Your information</UserInfoTitle>

        <UserLabel>
          Email: <span>{user.email}</span>
        </UserLabel>
        <UserLabel>
          Nome: <span>{user.name}</span>
        </UserLabel>
        <UserInfoTitle>
          {!perPrice
            ? "Number of games per game type"
            : "Value spent in each type of game"}
        </UserInfoTitle>
        <InfoWrapper isData = "true">
          {userGameInfo &&
            userGameInfo.map((user) => {
              return (
                <UserLabel>
                  {user.type}:{" "}
                  <span>
                    {!perPrice
                      ? user.quantity
                      : `R$ ${user.price
                          ?.toFixed(2)
                          .toString()
                          .replace(".", ",")}`}
                  </span>
                </UserLabel>
              );
            })}
        </InfoWrapper>
        <ActionButton
          hei={6.4}
          win={11.5}
          border="#01AC66"
          backgroung="#01AC66"
          end={true}
          onAction={perPriceHandler}
        >
          {!perPrice ? "Get by price" : "Get by quantity"}
        </ActionButton>
      </UserInfoWrapper>
    </>
  );
};

export default UserInfo;
