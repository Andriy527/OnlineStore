import {IuserState} from "@/models";
import {createSlice} from "@reduxjs/toolkit";

const initialState: IuserState = {
    isAuth: false,
    userInfo: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth(state, action) {
            state.isAuth = action.payload;
        },
        setUser(state, action) {
            state.userInfo = action.payload;
        }
    }
})