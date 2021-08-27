import React from "react";
import ActionButton from "../ActionButton";
import { FormTitle } from "../FormSignIn/style";
import Input from "../Input";
import Navbar from "../Navbar";
import { FieldTitle } from "../UpdateUser/style";
import { InfoWrapper, UserInfoWrapper } from "../UserInfo/style";

const NewGame: React.FC = () => {
  return (
    <>
      <Navbar hasHome={true} id={Math.random().toString()} hasNav={true} />
      <form>
        <UserInfoWrapper hei={70} wid={50}>
          <FormTitle>Create your Game</FormTitle>
          <InfoWrapper>
            <FieldTitle>Type</FieldTitle>
            <Input
              type="text"
              text="Type"
              onChange={(event) => console.log(event.target.value)}
            />
            <FieldTitle>Description</FieldTitle>
            <Input
              type="area"
              text="Description"
              onChange={(event) => console.log(event.target.value)}
            />
            <FieldTitle> Range</FieldTitle>
            <Input
              type="decimal"
              text="Range"
              onChange={(event) => console.log(event.target.value)}
            />
            <FieldTitle> Price</FieldTitle>
            <Input
              type="decimal"
              text="Price"
              onChange={(event) => console.log(event.target.value)}
            />
            <FieldTitle> Max Number</FieldTitle>
            <Input
              type="decimal"
              text="Max Number"
              onChange={(event) => console.log(event.target.value)}
            />
            <FieldTitle> Color</FieldTitle>
            <Input
              type="text"
              text="Color"
              onChange={(event) => console.log(event.target.value)}
            />
            <FieldTitle> MIn Cart Value</FieldTitle>
            <Input
              type="decimal"
              text="Min Cart Value"
              onChange={(event) => console.log(event.target.value)}
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
