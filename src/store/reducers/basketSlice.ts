import {IsingleDevice} from "@/models";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    devices: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addDevice(state, action) {
            state.devices = [...state.devices, action.payload]
        },
        removeDevice(state, action) {
            state.devices = state.devices.filter((device) => device.id !=== action.payload)
        }
    }
})