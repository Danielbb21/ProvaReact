import React from "react";
import { InputWrapper } from "./style";

interface InputProps {
  text: string;
  type: string;
}

const Input: React.FC<InputProps> = (props) => {
  return <InputWrapper placeholder={props.text} type = {props.type}></InputWrapper>;
};

export default Input;
