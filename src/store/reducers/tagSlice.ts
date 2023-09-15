import {ItagState} from "@/models";
import {createSlice} from "@reduxjs/toolkit";

const initialState: ItagState = {
    tags: []
}

export const tagSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {
        setTags(state, action) {
            state.tags = action.payload
        },
        addTag(state, action) {
            state.tags = [...state.tags, action.payload]
        }
    }
})