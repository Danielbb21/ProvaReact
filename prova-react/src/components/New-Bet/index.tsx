import React from "react";
import { ButtonInActionWrapper, DescriptionInfo, DescriptionTitle, DescriptionWrapper, TitleWrapper } from "./style";

interface GameTitleProps {
  title: string;
}

interface GameDescriptionProps{
  description: string | undefined;
}

interface ButtonStyleProps{
  win: number;
}

export const GameTitle: React.FC<GameTitleProps> = (props) => {
  return (
    <TitleWrapper>
      NEW BET <span>{props.title}</span>
    </TitleWrapper>
  );
};

export const GameDescription: React.FC<GameDescriptionProps> = (props) =>{

  return(
    <DescriptionWrapper>
      <DescriptionTitle>Fill your bet</DescriptionTitle>
      <DescriptionInfo>{props.description}</DescriptionInfo>
    </DescriptionWrapper>
  )
};

export const ButtonStyle: React.FC<ButtonStyleProps> = (props) =>{
    return(
      <ButtonInActionWrapper win={props.win}>
        {props.children}
      </ButtonInActionWrapper>
    );
};

