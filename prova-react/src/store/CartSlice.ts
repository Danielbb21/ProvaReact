import { createSlice,  PayloadAction } from "@reduxjs/toolkit";

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

export default cartSlice.reducer;