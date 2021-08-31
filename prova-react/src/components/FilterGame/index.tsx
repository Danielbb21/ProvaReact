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

interface FilterGameProps {
  id: string;
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
  const data = dateString[0].split('-');
  const day = data[2];
  const month = data[1];
  const year = data[0];

  return `${day}/${month}/${year}`;
}


const FilterGame: React.FC<FilterGameProps> = (props) => {
  const games = useAppSelector((state) => state.game.items);
  
  const history = useHistory();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.info);
  console.log('USER', user);
  const token = useAppSelector((state) => state.user.token);
  const sortGame = (
    arr: CartInterface[],
    typeOfSort: string | null,
    id: string
  ) => {
    
    const date = new Date();
    const formatedDate = formatDate(date);
    if (arr[0]) {
     arr =  arr.map((element) => {
       
        return {...element , date_game: formatApiDate(element.game_date)};
      });
      console.log('arrr', arr);
      console.log(arr[0].date_game, formatedDate);
    }
    if (typeOfSort) {
      const game = games.find(g => g.type === typeOfSort);
      if(!game) return;
      return arr
        .filter((cart) => cart.game_id === + game?.id)
        .filter((cart) => cart.user_id === +id)
        .filter((cart) => cart.date_game === formatedDate);
    }
    
  
    return arr
      .filter((cart) => cart.user_id === +id)
      .filter((cart) => cart.date_game === formatedDate);
  };
 
  useEffect(() => {
    if (!token) return;
    dispatch(getGameData(token));
    console.log('aqui');
    dispatch(getUserInfo(token));
    
  }, [dispatch, token]);
  const { id } = props;

  const queryParams = new URLSearchParams(location.search);

  const isSortingName = queryParams.get("sort");
  const [filter, setFilter] = useState<string>('');
  
  const arr = sortGame(user.gambles, isSortingName, user.id);
  console.log('ARRR', arr);

  const filterGame = (gameName: string) => {
    setFilter(gameName);
    if (isSortingName === gameName) {
      setFilter('');
      history.push(`/my-bets/${id}?sort=`);
    } else {
      history.push(`/my-bets/${id}?sort=${gameName}`);
    }
  };

  return (
    <FilterContainer>
      <FilterHeaderWrapper>
        <FilterHeaderContent>
          <FilterTitle>Recent Games</FilterTitle>
          <FilterWord>Filters</FilterWord>
          <FilterButton>
            {games.map((game) => {
              if(filter === game.type){
                return (
                  <ButtonGame
                choseGame={filterGame.bind(this, game.type)}
                key={Math.random().toString()}
                color={game.color}
                background={game.color}
                isClickable = {true}
              >
                {game.type}
              </ButtonGame>
                )
              }

              else{
              return (
              <ButtonGame
                choseGame={filterGame.bind(this, game.type)}
                key={Math.random().toString()}
                color={game.color}
                background={game.color}
              >
                {game.type}
              </ButtonGame>
              
            )
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
      { arr && arr.length === 0 && <MessageWrapper>No Game found</MessageWrapper>}
      { arr && arr.length > 0
        ? arr.map((element) => {
          const game = games.find(g => +g.id === element.game_id);
          if(!game) return null;
          
          return( <CartItems
              key={Math.random().toString()}
              size="2"
              price={element.price.toFixed(2).toString().replace('.', ',')}
              type={game.type}
              color={game.color}
              isList={true}
              date={element.date_game}
            >
              <CartNumbers wid="100" size="2">
                {element.gameNumbers.toString()}
              </CartNumbers>
            </CartItems>)
        }
          )
        : ""}
    </FilterContainer>
  );
};

export default FilterGame;
