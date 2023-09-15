import {deviceSlice} from "@/store/reducers/deviceSlice";
import {tagSlice} from "@/store/reducers/tagSlice";
import {brandSlice} from "@/store/reducers/brandSlice";
import {ThunkDispatch} from "redux-thunk";
import {getBrands, getDevices, getTags} from "@/services/deviceServices";
import {Action} from "redux";
import {IbrandState, IdeviceState, ItagState} from "@/models";
export const setDevices = (typeId: null | number, brandId: null | number, page: number, limit: number) => {
    return async (dispatch: ThunkDispatch<Action, IdeviceState, any>) => {
           const devices = await getDevices(typeId, brandId, page, limit)

           dispatch(deviceSlice.actions.setDevices(devices));
    }
}

export const setBrands = () => {
    return async (dispatch: ThunkDispatch<Action, IbrandState, any>) => {
        const brands = await getBrands();

        dispatch(brandSlice.actions.setBrands(brands));
    }
}

export const setTags = () => {
    return async (dispatch: ThunkDispatch<Action, ItagState, any>) => {
        const tags = await getTags();

        dispatch(tagSlice.actions.setTags(tags))
    }
}