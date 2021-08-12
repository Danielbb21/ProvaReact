import React from "react";
import { ButtonGameWrapper } from "./style";

interface ButtonProps {
  background?: string;
  color?: string;
  choseGame?: () => void
}

const ButtonGame: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonGameWrapper backgorund={props.background} color={props.color} onClick= {props.choseGame}>
      {props.children}
    </ButtonGameWrapper>
  );
};

export default ButtonGame;
