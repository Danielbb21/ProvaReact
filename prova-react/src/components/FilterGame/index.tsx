import React, { useState } from "react";
import { VscArrowRight } from "react-icons/vsc";
import ButtonGame from "../ButtonGame";
import {
  FilterButton,
  FilterContainer,
  FilterHeaderContent,
  FilterHeaderWrapper,
  FilterTitle,
  FilterWord,
  LinksWrappers,
  MessageWrapper,
  ToNewBetLink,
} from "./style";
import { useAppDispatch, useAppSelector } from "../../store/store-hooks";
import { CartNumbers } from "../Cart/style";
import { CartItems } from "../Cart";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getGameData } from "../../store/GameSlice";
import { getUserInfo } from "../../store/UserSlice";
import useApi from "../../hooks/use-Api";
import Loader from "../Loader";
import { ButtonFilter, ButtonFilterWrapper } from "../ButtonGame/style";

interface FilterGameProps {
  id: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  token?: string;
  token_created_at?: string;
  created_at: string;
  updated_at: string;
}
interface Game {
  id: string;
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
  "min-cart-value": number;
  created_at: string;
  updated_at: string;
}
interface Data {
  id: number;
  gameNumbers: string;
  user_id: number;
  game_id: number;
  price: number;
  game_date: string;
  created_at: string;
  updated_at: string;
  user: User;
  game: Game;
}

interface Bets {
  total: number;
  perPage: number;
  page: number;
  lastPage: number;
  data?: Data[];
}
interface CartInterface {
  maxNumber: number;
  type: string;
  price: number;
  color: string;
  gameNumbers: string;
  date_game?: string;
  game_date: string;
  game_id: number;

  user_id: number;
}
const formatDate = (date: Date) => {
  const dateString = date.toLocaleDateString().split("/");

  const day = dateString[0];
  const month = dateString[1];
  const year = dateString[2];

  return `${day}/${month}/${year}`;
};
const formatApiDate = (date: string) => {
  const dateString = date.split("T");
  const data = dateString[0].split("-");
  const day = data[2];
  const month = data[1];
  const year = data[0];

  return `${day}/${month}/${year}`;
};

const FilterGame: React.FC<FilterGameProps> = (props) => {
  const games = useAppSelector((state) => state.game.items);

  const history = useHistory();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.info);
  console.log("USER", user);
  const token = useAppSelector((state) => state.user.token);
  const sortGame = (typeOfSort: string | null) => {
    if (typeOfSort) {
      console.log("aqui");
      fetchData(1, typeOfSort);
    } else {
      fetchData(1);
    }

    // if (arr[0]) {
    //  arr =  arr.map((element) => {

    //     return {...element };
    //   });

    // }
    // if (typeOfSort) {
    //   const game = games.find(g => g.type === typeOfSort);
    //   if(!game) return;
    //   if(!arr[0]) return;
    //   return arr
    //     .filter((cart) => cart.game.type === typeOfSort)

    // }

    // return arr
  };

  const { bets, fetchData, isLoading } = useApi();

  useEffect(() => {
    if (!token) return;
    fetchData(1);
    setPageChosed(0);

    dispatch(getGameData(token));

    dispatch(getUserInfo(token));
  }, [dispatch, token, fetchData]);
  const { id } = props;

  const queryParams = new URLSearchParams(location.search);

  const isSortingName = queryParams.get("sort");
  const [filter, setFilter] = useState<string>("");
  // let arr: Data[] | undefined = []
  const [pageChosed, setPageChosed] = useState<number>();
  if (!bets?.data) {
    return <></>;
  }
  const arr = bets.data;

  console.log("ARRR RETURNED", arr);

  const filterGame = (gameName: string) => {
    setFilter(gameName);
    sortGame(gameName);
    setPageChosed(0);
    if (isSortingName === gameName) {
      setFilter("");
      sortGame("");
      history.push(`/my-bets/${id}?sort=`);
    } else {
      history.push(`/my-bets/${id}?sort=${gameName}`);
    }
  };
  let allPages: number[] = [];
  for (let i = 0; i < bets.lastPage; i++) {
    allPages.push(i);
  }
  const changePage = (page: number) => {
    console.log("PAGE", page + 1);
    setPageChosed(page);
    fetchData(page + 1, filter);
  };
  return (
    <>
    <FilterContainer>
      {isLoading && <Loader />}
      <FilterHeaderWrapper>
        <FilterHeaderContent>
          <FilterTitle>Recent Games</FilterTitle>
          <FilterWord>Filters</FilterWord>
          <FilterButton>
            {games.map((game) => {
              if (filter === game.type) {
                return (
                  <ButtonGame
                    choseGame={filterGame.bind(this, game.type)}
                    key={Math.random().toString()}
                    color={game.color}
                    background={game.color}
                    isClickable={true}
                  >
                    {game.type}
                  </ButtonGame>
                );
              } else {
                return (
                  <ButtonGame
                    choseGame={filterGame.bind(this, game.type)}
                    key={Math.random().toString()}
                    color={game.color}
                    background={game.color}
                  >
                    {game.type}
                  </ButtonGame>
                );
              }
            })}
          </FilterButton>
        </FilterHeaderContent>
        <LinksWrappers>
          <ToNewBetLink to={`/new-bet`}>
            <span>New Bet</span>
            <VscArrowRight />
          </ToNewBetLink>
          <ToNewBetLink to={`/game`}>
            <span>Create Game</span>
            <VscArrowRight />
          </ToNewBetLink>
        </LinksWrappers>
      </FilterHeaderWrapper>
      {arr && arr.length === 0 && (
        <MessageWrapper>No Game found</MessageWrapper>
      )}
      {arr && arr.length > 0
        ? arr.map((element) => {
            const game = games.find((g) => +g.id === element.game_id);
            if (!game) return null;

            return (
              <CartItems
                key={Math.random().toString()}
                size="2"
                price={element.price.toFixed(2).toString().replace(".", ",")}
                type={game.type}
                color={game.color}
                isList={true}
                date={formatApiDate(element.game_date)}
              >
                <CartNumbers wid="100" size="2">
                  {element.gameNumbers.toString()}
                </CartNumbers>
              </CartItems>
            );
          })
        : ""}
        <ButtonFilterWrapper>
        {allPages.length > 1 &&
      allPages.map((page) => {
        if(pageChosed === page){
          return(
            <ButtonFilter onClick={changePage.bind(this, page)} isClicked = {true}>
            {page + 1}
          </ButtonFilter>
          )
        }
        return (
         
            <ButtonFilter onClick={changePage.bind(this, page)}>
              {page + 1}
            </ButtonFilter>
          
        );
      })}
      </ButtonFilterWrapper>
    </FilterContainer>
    
     </> 
  );
};

export default FilterGame;
