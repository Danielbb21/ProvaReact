import React from "react";
import { CardWrapper } from "./style";

const Card: React.FC = (props) => {
  return <CardWrapper>{props.children}</CardWrapper>;
};

export default Card;
