import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import ActionButton from "../components/ActionButton";
import ButtonGame from "../components/ButtonGame";
import { CartEmptyMessage, CartItems, CartPrice } from "../components/Cart";
import {
  CartMax,
  CartNumbers,
  CartTitle,
  CartWrapper,
} from "../components/Cart/style";
import Navbar from "../components/Navbar";
import { GameDescription, GameTitle } from "../components/New-Bet";
import {
  BetNumbers,
  BetPageWrapper,
  ButtonInActionWrapper,
  DescriptionTitle,
} from "../components/New-Bet/style";
import Numbers from "../components/Numbers";
import { NumberPlace } from "../components/Numbers/style";
import gameData from "../games.json";
import { VscArrowRight } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../store/store-hooks";
import { addToCart } from "../store/CartSlice";
import { useHistory, useParams } from "react-router-dom";

interface Options {
  type: string;
  description: string;
  range: number;
  price: number;
  color: string;
  "max-number": number;
}
interface CartOptions {
  id: string;
  price: number;
  numbers: number[];
  type: string;
  color: string;
}

interface ParamTypes {
  id: string;
}

const NewBet: React.FC = () => {
  const [gameOptions, setGameOptions] = useState<Options>();
  const [numbersOfTheGame, setNumbersOfTheGame] = useState<number[]>([]);
  const [chosedNumbers, setChosedNumber] = useState<number[]>([]);
  const [cartNumbers, setCartNumber] = useState<CartOptions[]>([]);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { id } = useParams<ParamTypes>();

  const pickNumbersOfTheArray = useCallback((range: number) => {
    const arrayOfNumbers = fillNumbers(range, range);
    const sortedArray = arrayOfNumbers.sort(comparaNumeros);
    console.log("sortedNumbers", sortedArray);
    setNumbersOfTheGame(sortedArray);
  }, []);

  useEffect(() => {
    let gameOne = gameData.types[0];
    const {
      price,
      color,
      range,
      type,
      description,
      "max-number": maxNumber,
    } = gameOne;
    setGameOptions({
      price,
      color,
      range,
      type,
      description,
      "max-number": maxNumber,
    });
    pickNumbersOfTheArray(range);
  }, [pickNumbersOfTheArray]);

  const fillNumbers = (maxNumbers: number, range: number): number[] => {
    var numeros = [];

    while (numeros.length < maxNumbers) {
      var aleatorio = Math.floor(Math.random() * range) + 1;
      if (numeros.indexOf(aleatorio) === -1) numeros.push(aleatorio);
    }
    return numeros;
  };
  const comparaNumeros = (a: number, b: number): number => {
    if (a === b) return 0;
    if (a < b) return -1;
    if (a > b) return 1;
    else return 3;
  };

  const handleClick = (typeGame: string) => {
    const gameChosed = gameData.types.filter((game) => game.type === typeGame);
    if (typeGame !== gameOptions?.type) {
      setChosedNumber([]);
    }
    const {
      price,
      color,
      range,
      type,
      description,
      "max-number": maxNumber,
    } = gameChosed[0];
    setGameOptions({
      price,
      color,
      range,
      type,
      description,
      "max-number": maxNumber,
    });
    pickNumbersOfTheArray(range);
  };

  const isPosibleToChoseTheNumber = (numberToBeChose: number): boolean => {
    const isAlreadyChosed = chosedNumbers.find(
      (num) => num === numberToBeChose
    );
    const isAlreadyIntheLimit =
      chosedNumbers.length === gameOptions?.["max-number"];
    if (isAlreadyChosed) {
      setChosedNumber((previus) =>
        previus.filter((num) => num !== numberToBeChose)
      );
      return false;
    }
    if (isAlreadyIntheLimit) {
      console.log("You already chosed all the numbers");
      return false;
    }
    return true;
  };

  const handleChoseNumber = (numberChosed: number) => {
    const isPosibleToChose = isPosibleToChoseTheNumber(numberChosed);

    if (isPosibleToChose) {
      console.log(chosedNumbers);
      setChosedNumber((previusState) => {
        let newArray = [...previusState];
        newArray.push(numberChosed);
        return newArray;
      });
    }
  };

  const completeGameHandler = () => {
    const arrayOfChosenNumbers = [...chosedNumbers];
    if (!gameOptions) {
      return;
    }
    while (arrayOfChosenNumbers.length !== gameOptions?.["max-number"]) {
      let numberSorted = Math.floor(Math.random() * gameOptions?.range) + 1;
      console.log("number", numberSorted);
      let isAlreadyChosed = arrayOfChosenNumbers.find(
        (number) => number === numberSorted
      );
      if (!isAlreadyChosed) {
        arrayOfChosenNumbers.push(numberSorted);
      }
    }
    setChosedNumber(arrayOfChosenNumbers);
  };

  const clearGameHandler = () => {
    if (chosedNumbers.length > 0) {
      setChosedNumber([]);
    }
  };

  const addGameToCartHandler = () => {
    if (chosedNumbers.length !== gameOptions?.["max-number"]) {
      console.log("ainda faltam números no jogo");
      return;
    }
    setCartNumber((previus) => {
      const newArray = [...previus];
      newArray.push({
        id: Math.random().toString(),
        color: gameOptions.color,
        numbers: chosedNumbers,
        price: gameOptions.price,
        type: gameOptions.type,
      });
      return newArray;
    });

    setChosedNumber([]);
  };

  const removeItemHandler = (id: string) => {
    setCartNumber((previus) => previus.filter((cart) => cart.id !== id));
  };

  const cartValue: number[] = [];
  for (const i of cartNumbers) {
    cartValue.push(i.price);
  }
  console.log("cartValue", cartValue);
  const totalPrice = cartValue.reduce((next, current) => {
    return next + current;
  }, 0);

  const formatNumberToBePresented = (num: number): string => {
    return `R$ ${num.toFixed(2).replace(".", ",")}`;
  };

  const formatDate = (date: Date): string => {
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let day = date.toDateString().split(' ')[2];
    return day + "/" + month + "/" + year;
  };

  const saveGameHandler = () => {
    if (totalPrice >= 30) {
      console.log("Game salvo", cartNumbers);
      const date = formatDate(new Date());

      cartNumbers.forEach((cart) => {
        const teste = {
          id: cart.id,
          price: cart.price,
          color: cart.color,
          typeGame: cart.type,
          numbers: cart.numbers,
          date,
          user_id: id,
        };

        dispatch(addToCart(teste));
      });
      console.log(
        "teste",
        cart.items.map((car) => car)
      );
      setCartNumber([]);
      history.replace(`/my-bets/${id}`);
    } else {
      console.log("Valor abaixo do mínimo: 30");
    }
  };

  return (
    <>
      <Navbar hasHome={true} id={id} />
      <BetPageWrapper>
        <BetNumbers>
          <GameTitle title={"FOR " + gameOptions?.type.toUpperCase()} />
          <DescriptionTitle>Chose a game</DescriptionTitle>
          <ButtonInActionWrapper win={40}>
            {gameData.types.map((game) => (
              <ButtonGame
                key={Math.random().toString()}
                color={game.color}
                background={game.color}
                choseGame={handleClick.bind(this, game.type)}
              >
                {game.type}
              </ButtonGame>
            ))}
          </ButtonInActionWrapper>

          <GameDescription description={gameOptions?.description} />

          <NumberPlace>
            {numbersOfTheGame.length > 0
              ? numbersOfTheGame.map((number) => {
                  if (chosedNumbers.find((num) => num === number)) {
                    return (
                      <Numbers
                        onChoseNumber={handleChoseNumber.bind(this, number)}
                        isChosed={true}
                      >
                        {number}
                      </Numbers>
                    );
                  }
                  return (
                    <Numbers
                      onChoseNumber={handleChoseNumber.bind(this, number)}
                    >
                      {number}
                    </Numbers>
                  );
                })
              : ""}
          </NumberPlace>
          <ButtonInActionWrapper win={64.8}>
            <ActionButton
              win={16.4}
              hei={5.2}
              color="#27C383"
              border="#27C383"
              onAction={completeGameHandler}
            >
              Complet Game
            </ActionButton>
            <ActionButton
              win={13.5}
              hei={5.2}
              color="#27C383"
              onAction={clearGameHandler}
              border="#27C383"
            >
              Clear Game
            </ActionButton>
            <ActionButton
              win={20.9}
              hei={5.2}
              backgroung="#27C383"
              border="#27C383"
              onAction={addGameToCartHandler}
            >
              <IoCartOutline size={25} />
              <span>Add to Cart</span>
            </ActionButton>
          </ButtonInActionWrapper>
        </BetNumbers>
        <CartWrapper>
          <CartTitle>Cart</CartTitle>
          <CartMax>
            {totalPrice === 0 && <CartEmptyMessage />}
            {cartNumbers.map((element) => (
              <CartItems
                key={element.id}

                price={formatNumberToBePresented(element.price)}
                type={element.type}
                onRemove={removeItemHandler.bind(this, element.id)}
                color={element.color}
              >
                <CartNumbers wid = '80'>
                  {element.numbers.sort(comparaNumeros).toString()}
                </CartNumbers>
              </CartItems>
            ))}
          </CartMax>
          <CartPrice>{formatNumberToBePresented(totalPrice)}</CartPrice>

          <ActionButton
            hei={9.6}
            win={31.7}
            color="#27C383"
            backgroung = '#F4F4F4'
            size="3.5"
            border="#E2E2E2"
            onAction={saveGameHandler}
          >
            Save
            <VscArrowRight />
          </ActionButton>
        </CartWrapper>
      </BetPageWrapper>
    </>
  );
};

export default NewBet;
