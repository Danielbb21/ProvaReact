import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { AppDispatch, AppThunk } from "./store";


const localToken = localStorage.getItem('token') || null;

const logged = !!localToken;

const UserObj = {
    token: localToken,
    isLoggedIn: logged,
    info: {
        id: '',
        email: '',
        name: '',
        password: '',
        gambles: []
    }

}



interface UserInformation {
    id: string;
    name: string;
    email: string;
    password?: string;
    gamble?: [];
}

export const UserSlice = createSlice({
    name: 'user',
    initialState: UserObj,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            
            const data = action.payload;
            localStorage.setItem('token', data);
            state.token = data;
            state.isLoggedIn = true;
            return state;
        },
        logOut: (state) => {
            localStorage.removeItem('token');
            state.token = null;
            state.isLoggedIn = false;
        },

        setUserInfo: (state, action: PayloadAction<UserInformation>) => {
            state.info.email = action.payload.email;
            state.info.name = action.payload.name;
            state.info.id = action.payload.id;
            if (action.payload.password) {
                state.info.password = action.payload.password;
            }
            if (action.payload.gamble) {
                state.info.gambles = action.payload.gamble.map(gamble => gamble);
            }

        }
    }
});


export const { login, logOut, setUserInfo } = UserSlice.actions;
export default UserSlice.reducer;

export function logUser(email: string, password: string): AppThunk {
    return async function (dispatch: AppDispatch) {
        axios
            .post("http://127.0.0.1:3333/session", {
                email: email,
                password: password,
            })
            .then((response) => {
                const token = response.data.token;

                dispatch(login(token));
                return true;

            })
            .catch((err) => {
                
                if (err.message === 'Request failed with status code 400') {
                    toast.error('Email password combination is wrong', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 1500,
                    });
                } else {
                    toast.error('Sommeting Went Wrong', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 1500,
                    });
                }
                console.log(err.message);
                return false;
            });
    }


}

export function getUserInfo(token: string): AppThunk {
    return async function (dispatch: AppDispatch) {
        axios.get('http://127.0.0.1:3333/user', {
            headers: { Authorization: `Bearer ${token}` }
        }).then(response => {
            
            dispatch(setUserInfo({ email: response.data[0].email, name: response.data[0].name, gamble: response.data[0].gambles, id: response.data[0].id }));

        })
            .catch(err => {
                console.log(err.message);
            })
    }


}