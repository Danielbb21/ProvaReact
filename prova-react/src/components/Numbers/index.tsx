import React from "react";
import { NumbersWrapper } from "./style";

interface NumbersProps {
  onChoseNumber?: () => void;
  isChosed?: boolean;
}

const Numbers: React.FC<NumbersProps> = (props) => {
  return (
    <NumbersWrapper onClick={props.onChoseNumber} isChosed={props.isChosed}>
      <span>{props.children}</span>
    </NumbersWrapper>
  );
};

export default Numbers;
