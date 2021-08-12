import React from "react";
import { VscArrowRight } from "react-icons/vsc";
import data from "../../games.json";
import ButtonGame from "../ButtonGame";
import { FilterButton, FilterHeaderContent, FilterHeaderWrapper, FilterTitle, FilterWord, ToNewBetLink } from "./style";

const FilterGame: React.FC = () => {
  return (
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
      <ToNewBetLink to = '/new-bet'>
        <span>New Bet</span>
        <VscArrowRight/>
      </ToNewBetLink>
    </FilterHeaderWrapper>
  );
};

export default FilterGame;
