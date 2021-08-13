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
import {  useAppSelector } from "../../store/store-hooks";
import { CartNumbers } from "../Cart/style";
import { CartItems } from "../Cart";

const FilterGame: React.FC = () => {
  const cartRedux = useAppSelector((state) => state.cart);
  // const [cartElements, setCartElements] = useState(cartRedux);

  const filterGame = (typeGame: string) =>{
    console.log(typeGame);
    // cartRedux.filter(cart => cart.typeGame === typeGame);
  //   setCartElements((previus) =>
  //   previus.find(cart => cart.typeGame === typeGame);
  // );
  
  // setCartElements(cartRedux);
  };

  return (
    <>
      <FilterHeaderWrapper>
        <FilterHeaderContent>
          <FilterTitle>Recent Games</FilterTitle>
          <FilterWord>Filters</FilterWord>
          <FilterButton>
            {data.types.map((game) => (
              <ButtonGame
                choseGame = {filterGame.bind(this, game.type)}
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
      {cartRedux.items.map((element) => (
       <CartItems
       key={element.id}
       price = {element.price.toString()}
       type={element.typeGame}
       
       color={element.color}
     >
       <CartNumbers>
         {element.numbers.toString()}
       </CartNumbers>
     </CartItems>
      ))}
    </>
  );
};

export default FilterGame;
