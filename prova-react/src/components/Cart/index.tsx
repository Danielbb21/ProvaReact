import React from "react";
import {
  BetInfo,
  BetNameAndPrice,
  CartEmptyWraper,
  CartItemsWrapper,
  CartLine,
  CartRemoveButton,
  CartTitle,
  CartValueWrapper,
  CartWrapper,
} from "./style";
import { VscTrash } from "react-icons/vsc";
interface CartItemsProps {
  color: string;
  onRemove: () => void;
  type?: string;
  price?: string;
}

const Cart: React.FC = () => {
  return <CartWrapper></CartWrapper>;
};

export const CartItems: React.FC<CartItemsProps> = (props) => {
  return (
    <CartItemsWrapper>
      <CartRemoveButton onClick={props.onRemove}>
        <VscTrash />
      </CartRemoveButton>
      {/* <CartLine colorLine={props.color} /> */}
      <BetInfo>
        {props.children}
        <BetNameAndPrice colorWord = {props.color}>
          <span>{props.type}</span>
          {props.price}
        </BetNameAndPrice>
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
