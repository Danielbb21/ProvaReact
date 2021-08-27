import React from "react";
import { InputWrapper } from "./style";

interface InputProps {
  text: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  display?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <InputWrapper
      placeholder={props.text}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      display = {props.display}
    ></InputWrapper>
  );
};

export default Input;
