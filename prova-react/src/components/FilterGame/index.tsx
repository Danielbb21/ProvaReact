import React from "react";
import { VscArrowRight } from "react-icons/vsc";
import data from "../../games.json";
import ButtonGame from "../ButtonGame";
import {
  FilterButton,
  FilterContainer,
  FilterHeaderContent,
  FilterHeaderWrapper,
  FilterTitle,
  FilterWord,
  MessageWrapper,
  ToNewBetLink,
} from "./style";
import { useAppDispatch, useAppSelector } from "../../store/store-hooks";
import { CartNumbers } from "../Cart/style";
import { CartItems } from "../Cart";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getGameData } from "../../store/GameSlice";

interface FilterGameProps {
  id: string;
}

interface CartInterface {
  maxNumber: number;
  type: string;
  price: string;
  color: string;
  gameNumbers: string;
  date_game?: string;
  game_date: string;
  game_id: number;
  user_id: number;
}

const sortGame = (arr: CartInterface[], typeOfSort: string | null, id: string) => {
  
  if (typeOfSort) {
    
    return arr.filter((cart) => cart.type === typeOfSort );
  }
  return arr;
};



const FilterGame: React.FC<FilterGameProps> = (props) => {
  const games = useAppSelector(state => state.game.items);
  const cartRedux = useAppSelector((state) => state.cart.items);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const token = useAppSelector(state =>  state.user.token);
  console.log('CART_REDUX', cartRedux);
  useEffect(()=>{
    if(!token) return;
    dispatch(getGameData(token));
    console.log('aquiii');
  }, [dispatch, token]);
  const { id } = props;

  const queryParams = new URLSearchParams(location.search);

  const isSortingName = queryParams.get("sort");

  console.log('CART REDUX', cartRedux)
  const arr = sortGame(cartRedux, isSortingName, id);

  const filterGame = (gameName: string) => {
    if (isSortingName === gameName) {
      history.push(`/my-bets/${id}?sort=`);
    } else {
      history.push(`/my-bets/${id}?sort=${gameName}`);
    }
  };

  return (
    <FilterContainer >
      <FilterHeaderWrapper>
        <FilterHeaderContent>
          <FilterTitle>Recent Games</FilterTitle>
          <FilterWord>Filters</FilterWord>
          <FilterButton>
            {games.map((game) => (
              <ButtonGame
                choseGame={filterGame.bind(this, game.type)}
                key={Math.random().toString()}
                color={game.color}
                background={game.color}
              >
                {game.type}
              </ButtonGame>
            ))}
          </FilterButton>
        </FilterHeaderContent>

        <ToNewBetLink to={`/new-bet/${id}`}>
          <span>New Bet</span>
          <VscArrowRight />
        </ToNewBetLink>
      </FilterHeaderWrapper>
      {arr.length === 0 && <MessageWrapper>No Game found</MessageWrapper>}
      {arr.length > 0 ? arr.map((element) => (
        <CartItems
          key={Math.random().toString()}
          size = '2'
          price={element.price}
          type={element.type}
          color={element.color}
          isList = {true}
          date = {element.date_game}
        >
          <CartNumbers wid = '100' size = '2'>{element.gameNumbers.toString()}</CartNumbers>
        </CartItems>
      )) : ''}
    </FilterContainer>
  );
};

export default FilterGame;
