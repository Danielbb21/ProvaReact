import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppSelector } from "../../store/store-hooks";
import ActionButton from "../ActionButton";
import { FormTitle } from "../FormSignIn/style";
import Input from "../Input";
import Navbar from "../Navbar";
import { FieldTitle } from "../UpdateUser/style";
import { InfoWrapper, UserInfoWrapper } from "../UserInfo/style";

const NewGame: React.FC = () => {
  const [enteredType, setEnteredType] = useState<string>("");
  const [enteredDescription, setEnteredDescription] = useState<string>("");
  const [enteredRange, setEnteredRange] = useState<number>(0);
  const [enteredPrice, setEnteredPrice] = useState<number>(0);
  const [enteredMaxNumber, setEnteredMaxNumber] = useState<number>(0);
  const [enteredColor, setEnteredColor] = useState<string>("#ffffff");
  const [enteredMinCartValue, setEnteredMinCartValue] = useState<number>(0);
  const typeValid = enteredType.trim().length !== 0;
  const descriptionValid = enteredDescription.trim().length !== 0;
  const rangeValid = enteredRange > 0;
  const priceValid = enteredPrice > 0;
  const maxNumberValid = enteredMaxNumber > 0;
  const colorValid = enteredColor.trim().length !== 0;
  const minCartValid = enteredMinCartValue > 0;
  const token = useAppSelector((state) => state.user.token);
  const history = useHistory();

  const formValid =
    typeValid &&
    descriptionValid &&
    rangeValid &&
    priceValid &&
    maxNumberValid &&
    colorValid &&
    minCartValid;
  const createGameHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (formValid) {
      if (enteredMaxNumber > enteredRange) {
        toast.error("max numbers bigger than range", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        return;
      }

      axios
        .post(
          "http://127.0.0.1:3333/game",
          {
            type: enteredType,
            description: enteredDescription,
            range: enteredRange,
            price: enteredPrice,
            "max-number": enteredMaxNumber,
            color: enteredColor,
            "min-cart-value": enteredMinCartValue,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
          
          toast.success("Game Created", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
          });
          history.push('/my-bets');
        })
        .catch((err) => {
          
          toast.error("Sommeting went wrong", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
        });
    } else {
      toast.error("Invalid Field(s)", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    }
  };
  return (
    <>
      <Navbar hasHome={true} id={Math.random().toString()} hasNav={false} />
      <form onSubmit={createGameHandler}>
        <UserInfoWrapper hei={70} wid={50}>
          <FormTitle>Create your Game</FormTitle>
          <InfoWrapper>
            <FieldTitle>Type</FieldTitle>
            <Input
              type="text"
              text="Type"
              onChange={(event) => setEnteredType(event.target.value)}
            />
            <FieldTitle>Description</FieldTitle>
            <Input
              type="textarea"
              text="Description"
              onChange={(event) => setEnteredDescription(event.target.value)}
            />
            <FieldTitle> Range</FieldTitle>
            <Input
              type="number"
              min="0"
              step="1"
              text="Range"
              onChange={(event) => setEnteredRange(+event.target.value)}
            />
            <FieldTitle> Price</FieldTitle>
            <Input
              type="number"
              step=".01"
              text="Price"
              onChange={(event) => setEnteredPrice(+event.target.value)}
            />
            <FieldTitle> Max Number</FieldTitle>
            <Input
              type="number"
              min="0"
              step="1"
              text="Max Number"
              onChange={(event) => setEnteredMaxNumber(+event.target.value)}
            />
            <FieldTitle> Color</FieldTitle>
            <Input
              type="color"
              text="Color"
              onChange={(event) => setEnteredColor(event.target.value)}
            />
            <FieldTitle> MIn Cart Value</FieldTitle>
            <Input
              type="number"
              text="Min Cart Value"
              min="0"
              step="1"
              onChange={(event) => setEnteredMinCartValue(+event.target.value)}
            />
          </InfoWrapper>
          <br />
          <ActionButton
            hei={6.4}
            win={11.5}
            border="#01AC66"
            backgroung="#01AC66"
          >
            Save
          </ActionButton>
        </UserInfoWrapper>
      </form>
    </>
  );
};

export default NewGame;
