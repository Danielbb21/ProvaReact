import React from "react";
import {
  BetInfo,
  BetNameAndPrice,
  CartEmptyWraper,
  CartItemsWrapper,
  
  CartRemoveButton,
  CartTitle,
  CartValueWrapper,
  CartWrapper,
  DateAndPriceWrapper,
} from "./style";
import { VscTrash } from "react-icons/vsc";
interface CartItemsProps {
  color: string;
  onRemove?: () => void;
  type?: string;
  size?: string;
  price?: string;
  isList?:boolean;
  date?:string;
}

const Cart: React.FC = () => {
  return <CartWrapper></CartWrapper>;
};

export const CartItems: React.FC<CartItemsProps> = (props) => {
  return (
    <CartItemsWrapper>
     { props.onRemove && <CartRemoveButton onClick={props.onRemove}>
        <span><VscTrash  /></span>
      </CartRemoveButton>}
      
      <BetInfo borderColor  = {props.color} isList = {props.isList}>
        {props.children}
        {!props.isList && <BetNameAndPrice colorWord = {props.color} size = {props.size}>
          <span>{props.type}</span>
          {props.price}
        </BetNameAndPrice>}
        {props.isList && 
        <>
        <DateAndPriceWrapper>
          {props.date} - (R$ {props.price})
        </DateAndPriceWrapper>
        <BetNameAndPrice colorWord = {props.color} size = {props.size}>
          <span>{props.type}</span>
          
        </BetNameAndPrice>
        </>}
      </BetInfo>
    </CartItemsWrapper>
  );
};

export const CartPrice: React.FC = (props) => {
  return (
    <CartValueWrapper>
      <CartTitle>
        Cart <span>Total: {props.children}</span>
      </CartTitle>
    </CartValueWrapper>
  );
};

export const CartEmptyMessage: React.FC  = (props) =>{
  return (
    <CartEmptyWraper>
      Cart Empty
    </CartEmptyWraper>
  )
};



export default Cart;
