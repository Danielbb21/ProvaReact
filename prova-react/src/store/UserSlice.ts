import { createSlice,  PayloadAction } from "@reduxjs/toolkit";


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

        
    }
});


export const {login} = UserSlice.actions;
export default UserSlice.reducer;