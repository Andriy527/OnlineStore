import React, {FC} from 'react';
import {Idevice} from "@/models";
import Link from "next/link";

interface Props {
    device: Idevice
}
const DeviceItem: FC<Props> = ({device}) => {
    return (
        <div className="col-lg-4">
        <div className="card">
            <img className="card-img-top" style={{maxHeight: '200px'}} src={process.env.NEXT_PUBLIC_API_URL + device.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{device.name}</h5>
                    <p className="card-text text-primary">Price: {device.price}$</p>
                    <p className="card-text text-warning">Rating: {device.rating}</p>
                    <Link href={`/device/${device.id}`} className="btn btn-primary">See device</Link>
                </div>
        </div>
        </div>
    );
};

export default DeviceItem;