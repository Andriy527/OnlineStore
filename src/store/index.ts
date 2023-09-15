import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "@/store/reducers";

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}