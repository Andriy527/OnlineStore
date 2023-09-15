import {combineReducers} from "@reduxjs/toolkit";
import {userSlice} from "@/store/reducers/userSlice";
import {deviceSlice} from "@/store/reducers/deviceSlice";
import {brandSlice} from "@/store/reducers/brandSlice";
import {tagSlice} from "@/store/reducers/tagSlice";

export const rootReducer = combineReducers({
     user: userSlice.reducer,
     device: deviceSlice.reducer,
     brand: brandSlice.reducer,
     tag: tagSlice.reducer
})

export type rootReducerType = ReturnType<typeof rootReducer>


