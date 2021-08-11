import React from "react";
import { FormButonWrapper } from "./style";

interface ButtonProps{
    color?: string;
    position?: string;
    handleClick?: () => void
}

const ButtonForm: React.FC<ButtonProps> = (props) => {
  return <>
  <FormButonWrapper color = {props.color} position= {props.position} onClick = {props.handleClick}>
    {props.children}  
  </FormButonWrapper>
  </>;
};

export default ButtonForm;
