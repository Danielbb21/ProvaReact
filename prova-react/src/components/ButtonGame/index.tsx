import React from "react";
import { ButtonGameWrapper } from "./style";

interface ButtonProps {
  background?: string;
  color?: string;
}

const ButtonGame: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonGameWrapper backgorund={props.background} color={props.color} onClick= {()=>console.log('teste')}>
      {props.children}
    </ButtonGameWrapper>
  );
};

export default ButtonGame;
