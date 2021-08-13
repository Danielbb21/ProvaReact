import { configureStore } from "@reduxjs/toolkit";
import  cartSliceReducer  from "./CartSlice";
import UserSlice from "./UserSlice";
export const store = configureStore({
    reducer:{
        cart: cartSliceReducer,
        user: UserSlice
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
