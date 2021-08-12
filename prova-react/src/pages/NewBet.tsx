import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import ActionButton from "../components/ActionButton";
import ButtonGame from "../components/ButtonGame";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GameDescription, GameTitle } from "../components/New-Bet";
import { ButtonInActionWrapper } from "../components/New-Bet/style";
import Numbers from "../components/Numbers";
import { NumberPlace } from "../components/Numbers/style";
import gameData from "../games.json";

interface Options {
  type: string;
  description: string;
  range: number;
  price: number;
  color: string;
  "max-number": number;
}
interface CartOptions {
  price: number;
  numbers: number[];
  type: string;
  color: string;
}

const NewBet: React.FC = () => {
  const [gameOptions, setGameOptions] = useState<Options>();
  const [numbersOfTheGame, setNumbersOfTheGame] = useState<number[]>([]);
  const [chosedNumbers, setChosedNumber] = useState<number[]>([]);
  const [cartNumbers, setCartNumber] = useState<CartOptions[]>([]);

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
        color: gameOptions.color,
        numbers: chosedNumbers,
        price: gameOptions.price,
        type: gameOptions.type,
      });
      return newArray;
    });

    setChosedNumber([]);
  };

  return (
    <>
      <Navbar hasHome={true} />
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
      <GameTitle title={"FOR " + gameOptions?.type.toUpperCase()} />
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
                <Numbers onChoseNumber={handleChoseNumber.bind(this, number)}>
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
          onAction={completeGameHandler}
        >
          Complet Game
        </ActionButton>
        <ActionButton
          win={13.5}
          hei={5.2}
          color="#27C383"
          onAction={clearGameHandler}
        >
          Clear Game
        </ActionButton>
        <ActionButton
          win={20.9}
          hei={5.2}
          backgroung="#27C383"
          onAction={addGameToCartHandler}
        >
          Add to Cart
        </ActionButton>
      </ButtonInActionWrapper>
    </>
  );
};

export default NewBet;
