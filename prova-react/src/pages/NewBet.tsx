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
import { VscArrowRight } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../store/store-hooks";
import {  getBetData } from "../store/CartSlice";
import { useHistory, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/FormSignIn/style";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getGameData } from "../store/GameSlice";


interface Options {
  type: string;
  description: string;
  range: number;
  price: number;
  color: string;
  game_id: string;
  "max-number": number;
}
interface CartOptions {
  id: string;
  price: number;
  numbers: number[];
  type: string;
  game_id: string;
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
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { id } = useParams<ParamTypes>();
  const games = useAppSelector((state) => state.game.items);
  const token = useAppSelector((state) => state.user.token);

  const pickNumbersOfTheArray = useCallback((range: number) => {
    const arrayOfNumbers = fillNumbers(range, range);
    const sortedArray = arrayOfNumbers.sort(comparaNumeros);

    setNumbersOfTheGame(sortedArray);
  }, []);

  useEffect(() => {
    if (!token) return;
    dispatch(getGameData(token));
    
  }, [dispatch, token]);

  useEffect(() => {
    if (games.length === 0) return;
    let gameOne = games[0];
    
    const {
      price,
      color,
      range,
      type,
      id,
      description,
      "max-number": maxNumber,
    } = gameOne;
    setGameOptions({
      price,
      color,
      range,
      type,
      game_id: id,
      description,
      "max-number": maxNumber,
    });
    pickNumbersOfTheArray(range);
  }, [pickNumbersOfTheArray, games, dispatch, token]);

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
    const gameChosed = games.filter((game) => game.type === typeGame);
    if (typeGame !== gameOptions?.type) {
      setChosedNumber([]);
    }
    const {
      price,
      color,
      range,
      type,
      id,
      description,
      "max-number": maxNumber,
    } = gameChosed[0];
    setGameOptions({
      game_id: id,
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
      toast.error("You already chosed all the numbers", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      return false;
    }

    return true;
  };

  const handleChoseNumber = (numberChosed: number) => {
    const isPosibleToChose = isPosibleToChoseTheNumber(numberChosed);

    if (isPosibleToChose) {
      setChosedNumber((previusState) => {
        let newArray = [...previusState];
        newArray.push(numberChosed);
        return newArray;
      });
    }
  };

  const completeGameHandler = () => {
    let arrayOfChosenNumbers = [...chosedNumbers];

    if (arrayOfChosenNumbers.length === gameOptions?.["max-number"]) {
      
      arrayOfChosenNumbers = [];
    }
    if (!gameOptions) {
      return;
    }

    while (arrayOfChosenNumbers.length !== gameOptions?.["max-number"]) {
      let numberSorted = Math.floor(Math.random() * gameOptions?.range) + 1;

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
      toast.error("Still missing numbers in your game", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });

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
        game_id: gameOptions.game_id
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

  const totalPrice = cartValue.reduce((next, current) => {
    return next + current;
  }, 0);

  const formatNumberToBePresented = (num: number): string => {
    return `R$ ${num.toFixed(2).replace(".", ",")}`;
  };

  const formatDate = (date: Date): string => {
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let day = date.toDateString().split(" ")[2];
    return day + "/" + month + "/" + year;
  };

  const formatDate2 = (date: Date) => {
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let day = date.toDateString().split(" ")[2];

    return `${year}-${month}-${day} ${date.toLocaleTimeString()}`;
  };
  const saveGameHandler = () => {
    if (totalPrice >= 30) {
      const date = formatDate(new Date());
      
      const date2 = formatDate2(new Date());
   

      const data = cartNumbers.map((cart) => {
        return {
          gameNumbers: cart.numbers,
          price: cart.price,
          game_date: date2,
          game_id: cart.game_id
        };
      });

    
      if(token){
        try{
        dispatch(getBetData(token, data));
        history.replace('/my-bets');
        }
        catch(err){

        }
      }

     

      setCartNumber([]);
      
    } else {
      toast.error("Value of game is lower than R$ 30,00", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
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
            {games.map((game) => (
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
                      key = {Math.random().toString()}
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
        <ErrorMessage>
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
                  <CartNumbers wid="95">
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
              backgroung="#F4F4F4"
              size="3.5"
              border="#E2E2E2"
              isSave={true}
              onAction={saveGameHandler}
            >
              Save
              <VscArrowRight />
            </ActionButton>
          </CartWrapper>
        </ErrorMessage>
      </BetPageWrapper>
    </>
  );
};

export default NewBet;
