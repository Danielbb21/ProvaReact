import { useDispatch } from 'react-redux';
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import cartSliceReducer from "./CartSlice";
import UserSlice from "./UserSlice";
import gameSlice from './GameSlice';

export const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        user: UserSlice,
        game: gameSlice
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()