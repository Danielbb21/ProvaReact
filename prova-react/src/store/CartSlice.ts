import { RootState } from './store';
import { createSlice,  PayloadAction } from "@reduxjs/toolkit";

interface CartObj{
    
    id: string;
    typeGame: string;
    price: number;
    color: string;
    numbers: number[];
    // date?: Date;
}


const initialState: CartObj[] = [
   { id:'',
    color: '',
    
    price: 0,
    numbers: [],
    typeGame: ''
}
]


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<CartObj>) =>{
            const cartReturnObject = {
                id: action.payload.id,
                color: action.payload.color,
                price: action.payload.price,
                typeGame: action.payload.typeGame,
                numbers: action.payload.numbers,
                
            }
            state.push(cartReturnObject);
        }
    }
});

export const{addToCart} = cartSlice.actions;

// export const selectCart = (state: RootState) => state.cart.;

export default cartSlice.reducer;