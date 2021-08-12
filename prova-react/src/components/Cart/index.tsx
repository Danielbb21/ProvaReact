import React from "react";
import {
  CartItemsWrapper,
  CartLine,
  CartRemoveButton,
  CartWrapper,
} from "./style";
import { VscTrash } from "react-icons/vsc";
interface CartItemsProps {
  color: string;
  onRemove: () => void;
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
      <CartLine colorLine={props.color} />
      {props.children}
    </CartItemsWrapper>
  );
};

export default Cart;
