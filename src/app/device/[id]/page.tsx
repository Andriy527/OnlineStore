'use client';
import React, {useEffect, useState} from 'react';
import {getDevice} from "@/services/deviceServices";
import {Idevice, IdeviceInfo, IsingleDevice} from "@/models";
import {isDeviceAvalible} from "@/guards";
import {TsingleDevice} from "@/types";

const Device = ({ params }: { params: { id: number}}) => {
    const [device, setDevice] = useState<TsingleDevice>(null);

    useEffect(() => {
        getDevice(params.id).then(device => {
            setDevice(device)
        })

    }, [])
    return (
        <>
            {isDeviceAvalible(device) &&
                <div className="row p-2 bg-white border rounded">
                    <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image"
                                                        src={process.env.NEXT_PUBLIC_API_URL + device.img} /></div>
                    <div className="col-md-6 mt-1">
                        <h2>{device.name}</h2>
                        <div className="d-flex flex-row mt-5">
                            <h4 className="mr-1">Price: <b>{device.price}</b></h4><span className="strike-text">$</span>
                        </div>
                        <div className="d-flex flex-row mt-5">
                            <h4 className="mr-1">Rating: <b>{device.rating}</b></h4>
                        </div>
                        <div className="d-flex flex-row justify-content-center mt-5">
                            <h4 className="mr-1">Product info</h4>
                        </div>
                        {device.info && device.info.map((infoItem: IdeviceInfo) => {
                            return   <div key={infoItem.deviceId} className="d-flex bg-secondary p-4 flex-row mt-5">
                                <h6 className="mr-1 text-white"><b>{infoItem.title}:</b> {infoItem.description}</h6>
                            </div>
                        })}
                        <div className="d-flex flex-column mt-4">
                            <button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to busket</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Device;