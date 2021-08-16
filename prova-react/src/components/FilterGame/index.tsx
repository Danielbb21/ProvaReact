import React, { useEffect, useState } from "react";
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
  ToNewBetLink,
} from "./style";
import { useAppSelector } from "../../store/store-hooks";
import { CartNumbers } from "../Cart/style";
import { CartItems } from "../Cart";
import { useHistory, useLocation } from "react-router-dom";

interface FilterGameProps {
  id: string;
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

const sortGame = (arr: CartInterface[], typeOfSort: string | null, id: string) => {
  console.log("typeOfSort", typeOfSort);
  if (typeOfSort) {
    console.log("array", arr.filter(cart => cart.user_id === id));
    return arr.filter((cart) => cart.typeGame === typeOfSort ).filter(cart2 => cart2.user_id === id);
  }
  return arr.filter(cart=> cart.user_id === id);
};

const FilterGame: React.FC<FilterGameProps> = (props) => {
  const cartRedux = useAppSelector((state) => state.cart);
  const [cartElements, setCartElements] = useState<CartInterface[]>();
  const users = useAppSelector((state) => state.user.users);
  const history = useHistory();
  const location = useLocation();
  console.log("location", location);
  const { id } = props;

  const queryParams = new URLSearchParams(location.search);

  const isSortingName = queryParams.get("sort");

  console.log("isSortingGame", isSortingName);
  // useEffect(() => {
  //   setCartElements(
  //     cartRedux.items.filter((cartElement) => cartElement.user_id === id)
  //   );

  // }, [cartRedux.items, id]);

  const arr = sortGame(cartRedux.items, isSortingName, id);

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
            {data.types.map((game) => (
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
      {arr.length === 0 && <h2>No Game found</h2>}
      {arr.length > 0 ? arr.map((element) => (
        <CartItems
          key={element.id}
          size = '2'
          price={element.price.toString()}
          type={element.typeGame}
          color={element.color}
          isList = {true}
          date = {element.date}
        >
          <CartNumbers wid = '100' size = '2'>{element.numbers.toString()}</CartNumbers>
        </CartItems>
      )) : ''}
    </FilterContainer>
  );
};

export default FilterGame;
