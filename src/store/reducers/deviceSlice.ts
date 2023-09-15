import {IdeviceState} from "@/models";
import {createSlice} from "@reduxjs/toolkit";


const initialState : IdeviceState = {
    count: 0,
    limit: 3,
    selectedBrand: null,
    selectedTag: null,
    page: 1,
    rows: []
}

export const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
         setDevices(state, action) {
             state.count = action.payload.count;
             state.rows = action.payload.rows;
         },
         addDevice(state, action) {
             state.rows = [...state.rows, action.payload];
         },
         setDeviceByBrand(state, action) {
             state.selectedBrand = action.payload;
         },
        setDeviceByTag(state, action) {
             state.selectedTag = action.payload;
        },
        setDevicePage(state, action) {
             state.page = action.payload;
        }
    }

})