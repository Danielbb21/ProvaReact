import { createSlice,  PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { AppDispatch, AppThunk } from "./store";

interface CartObj{
    
    id: string;
    typeGame: string;
    price: number;
    color: string;
    numbers: number[];
    date?: string;
    user_id: string;
}
interface CartState{
    items: CartObj[];
}

const initialStateCart: CartState = {
   items : []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialStateCart,
    reducers:{
        addToCart: (state, action: PayloadAction<CartObj>) =>{
            const cartReturnObject = {
                id: action.payload.id,
                color: action.payload.color,
                price: action.payload.price,
                typeGame: action.payload.typeGame,
                numbers: action.payload.numbers,
                date: action.payload.date,
                user_id: action.payload.user_id
            }
            state.items.push(cartReturnObject);
        }
    }
});

export const{addToCart} = cartSlice.actions;

// export const selectCart = (state: RootState) => state.cart.;
interface GameData{
    gameNumbers: number[];
          price: number,
          game_date: string,
          game_id: string;
}


export function getBetData(token: string, data: GameData[]): AppThunk {
    return async function (dispatch: AppDispatch) {
        
        axios.post('http://127.0.0.1:3333/gamble', {data}, { headers: {Authorization: `Bearer ${token}`}})
      .then(response =>  {
        console.log(response.data);
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