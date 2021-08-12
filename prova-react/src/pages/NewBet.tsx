import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import ActionButton from "../components/ActionButton";
import ButtonGame from "../components/ButtonGame";
import Navbar from "../components/Navbar";
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

const NewBet: React.FC = () => {
  const [gameOptions, setGameOptions] = useState<Options>();
  const [numbersOfTheGame, setNumbersOfTheGame] = useState<number[]>([]);
  const [chosedNumbers, setChosedNumber] = useState<number[]>([]);

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

  return (
    <>
      <Navbar hasHome={true} />
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
      <h1>{gameOptions?.description}</h1>

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
        backgroung ='#27C383'
        onAction={clearGameHandler}
      >
        Clear Game
      </ActionButton>
    </>
  );
};

export default NewBet;
