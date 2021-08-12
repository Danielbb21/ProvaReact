import React from "react";
import { ButtonActionWrapper } from "./style";

interface ActionButtonProps {
  win: number;
  hei: number;
  color?: string;
  backgroung?: string;
  onAction?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = (props) => {
  return (
    <ButtonActionWrapper
      hei={props.hei}
      win={props.win}
      color={props.color}
      background={props.backgroung}
      onClick={props.onAction}
    >
      {props.children}
    </ButtonActionWrapper>
  );
};

export default ActionButton;
