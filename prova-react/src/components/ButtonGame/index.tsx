import React from "react";
import { ButtonGameWrapper } from "./style";

interface ButtonProps {
  background?: string | undefined;
  color?: string | undefined;
  choseGame?: () => void;
  isClickable?:boolean;
}

const ButtonGame: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonGameWrapper backgorund={props.background} color={props.color} onClick= {props.choseGame} isClickable ={props.isClickable}>
      {props.children}
    </ButtonGameWrapper>
  );
};

export default ButtonGame;
