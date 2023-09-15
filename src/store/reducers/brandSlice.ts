import {IbrandState} from "@/models";
import {createSlice} from "@reduxjs/toolkit";


const initialState: IbrandState = {
    brands: []
}

export const brandSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {
        setBrands(state, action) {
            state.brands = action.payload;
        },
        addBrand(state, action) {
            state.brands = [...state.brands, action.payload]
        }
    }
})