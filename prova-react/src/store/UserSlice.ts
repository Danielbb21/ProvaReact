import { createSlice,  PayloadAction } from "@reduxjs/toolkit";

interface UserObj{
    id: string;
    email: string;
    name: string;
    password: string;
}

interface UserState{
    users: UserObj[];
}

const InitialUserState: UserState = {
    users: []
}

export const UserSlice = createSlice({
    name: 'user',
    initialState: InitialUserState,
    reducers:{
        registerUser:(state, action: PayloadAction<UserObj>) =>{
            const data = action.payload;
            state.users.push(data);
            
        },

        
    }
});


export const {registerUser} = UserSlice.actions;
export default UserSlice.reducer;