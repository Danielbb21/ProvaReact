import { createSlice,  PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { AppDispatch, AppThunk } from "./store";


const localToken = localStorage.getItem('token') || null;

const logged = !!localToken;

const UserObj =  {
    token: localToken,
    isLoggedIn: logged
}





export const UserSlice = createSlice({
    name: 'user',
    initialState: UserObj,
    reducers:{
        login:(state, action: PayloadAction<string>) =>{
            console.log('Aquiii');
            const data = action.payload;
            console.log('DATAAA', data);
            localStorage.setItem('token', data);
            state.token = data;
            state.isLoggedIn = true;
        },
        logOut: (state) =>{
            localStorage.removeItem('token');
            state.token = null;
            state.isLoggedIn = false;
        }
        
    }
});


export const {login} = UserSlice.actions;
export default UserSlice.reducer;

export function logUser(email: string, password: string): AppThunk{
    return async function (dispatch: AppDispatch){
        axios
        .post("http://127.0.0.1:3333/session", {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log("ok teste", response.data);
          const token = response.data.token;
         dispatch(login(token));
          
          
        })
        .catch((err) => {
          toast.error('Sommeting Went Wrong', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
          

        });
    }
}