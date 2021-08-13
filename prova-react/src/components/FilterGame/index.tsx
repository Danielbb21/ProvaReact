import React from "react";
import { VscArrowRight } from "react-icons/vsc";
import data from "../../games.json";
import ButtonGame from "../ButtonGame";
import {
  FilterButton,
  FilterHeaderContent,
  FilterHeaderWrapper,
  FilterTitle,
  FilterWord,
  ToNewBetLink,
} from "./style";
import { useAppDispatch, useAppSelector } from "../../store/store-hooks";
import { CartNumbers } from "../Cart/style";

const FilterGame: React.FC = () => {
  const cartRedux = useAppSelector((state) => state.cart);

  return (
    <>
      <FilterHeaderWrapper>
        <FilterHeaderContent>
          <FilterTitle>Recent Games</FilterTitle>
          <FilterWord>Filters</FilterWord>
          <FilterButton>
            {data.types.map((game) => (
              <ButtonGame
                key={Math.random().toString()}
                color={game.color}
                background={game.color}
              >
                {game.type}
              </ButtonGame>
            ))}
          </FilterButton>
        </FilterHeaderContent>

        <ToNewBetLink to="/new-bet">
          <span>New Bet</span>
          <VscArrowRight />
        </ToNewBetLink>
      </FilterHeaderWrapper>
      {cartRedux.map((cart) => (
        <CartNumbers>{cart.typeGame}</CartNumbers>
      ))}
    </>
  );
};

export default FilterGame;
