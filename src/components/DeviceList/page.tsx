'use client';

import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setDevices} from "@/store/asyncActions";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {Idevice} from "@/models";
import DeviceItem from "@/components/DeviceItem/page";

const DeviceList = () => {
    const dispatch = useDispatch();
    const {rows, selectedBrand, selectedTag, page, limit} = useTypedSelector(state => state.device)

    useEffect(() => {
      dispatch(setDevices(selectedTag, selectedBrand, page, limit) as any);
    }, [selectedBrand, selectedTag, page])

    return (
        <div className="row">
            {rows && rows.map((device: Idevice) => {
                return <DeviceItem key={device.id} device={device} />
            })}
        </div>
    );
};

export default DeviceList;