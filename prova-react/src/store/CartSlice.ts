import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { AppDispatch, AppThunk } from "./store";

interface CartObj {

  maxNumber: number;
  type: string;
  price: string;
  color: string;
  gameNumbers: string;
  date_game?: string;
  game_date: string;
  game_id: number;
  user_id: number;
}
interface CartState {
  items: CartObj[];
}

const initialStateCart: CartState = {
  items: []
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialStateCart,
  reducers: {
    addToCart: (state, action: PayloadAction<CartObj[]>) => {
      console.log('action', action.payload);
      
      action.payload.forEach((game) => {
        state.items.push(game);
    });
      
      
    }
  }
});

export const { addToCart } = cartSlice.actions;

// export const selectCart = (state: RootState) => state.cart.;
interface GameData {
  gameNumbers: number[];
  price: number,
  game_date: string,
  game_id: string;
}


export function getBetData(token: string, data: GameData[]): AppThunk {
  return async function (dispatch: AppDispatch) {

    axios.post('http://127.0.0.1:3333/gamble', { data }, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        
        dispatch(addToCart(response.data));
        toast.success("bets saved sucesfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });
      })
      .catch(err => {
        toast.error("sommeting went wrong", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        console.log(err.message);
      })
  }


}



export default cartSlice.reducer;