'use client';
import React, {useState} from 'react';
import {setDevice} from "@/services/deviceServices";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {Ibrand, Iproperty, Itag} from "@/models";

interface Props {
    setIsVisible: React.SetStateAction<boolean>
}
const DeviceForm = ({setIsVisible}: Props) => {
    const [deviceName, setDeviceName] = useState<string>('');
    const [devicePrice, setDevicePrice] = useState<number | string>('');
    const [deviceImage, setDeviceImage] = useState<string>('');
    const [selectedBrand, setSelectedBrand] = useState<string>('');
    const [selectedType, setSelectedType] = useState<string>('');
    const [deviceInfo, setDeviceInfo] = useState<Iproperty[]>([]);
    const {brands} = useTypedSelector(state => state.brand);
    const {tags} = useTypedSelector(state => state.tag);

    const addProperty = () => {
        const property = {
            title: '',
            description: '',
            number: Date.now()
        }
        setDeviceInfo([...deviceInfo, property])
    }

    const changeProperty = (number: number, key: string, value: string) => {
        setDeviceInfo(deviceInfo.map((item: Iproperty) => item.number === number ? {...item, [key] : value} : item))
    }

    const removeProperty = (number: number) => {
        setDeviceInfo(deviceInfo.filter((item: Iproperty) => item.number !== number))
    }
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('name', deviceName)
        formData.append('price', `${devicePrice}`)
        formData.append('img', deviceImage)
        formData.append('brandId', selectedBrand)
        formData.append('typeId', selectedType)
        formData.append('info', JSON.stringify(deviceInfo))

        setDevice(formData);
    }
    return (
        <div className="card p-4">
            <button type="submit" className="btn btn-secondary my-4" onClick={() => setIsVisible(false)}>Back to
                pannel
            </button>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="brandName">Device name</label>
                    <input name="brandName" value={deviceName} onChange={(e) => setDeviceName(e.target.value)}
                           type="text" className="form-control"
                           placeholder="Enter device name"/>
                </div>
                <div className="form-group">
                    <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} name="selectBrand"
                            className="form-control">
                        <option selected disabled hidden value="select a brand">Select a brand</option>
                        {brands.map((brand: Ibrand) => {
                            return <option key={brand.id} value={brand.id}>{brand.name}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}
                            className="form-control">
                        <option selected disabled hidden value="select a tag">Select a tag</option>
                        {tags.map((tag: Itag) => {
                            return <option key={tag.id} value={tag.id}>{tag.name}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Device price</label>
                    <input value={devicePrice} onChange={(e) => setDevicePrice(e.target.value)} type="number"
                           className="form-control"
                           placeholder="Enter device price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="deviceImageField">Set device image</label>
                    <input onChange={(e: React.ChangeEvent<HTMLFormElement>) => setDeviceImage(e.target.files[0])} type="file" className="form-control-file"
                           id="deviceImageField"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="button" onClick={addProperty}>Add device property</button>
                    {deviceInfo.map((item: Iproperty) => {
                        return <div key={item.number} className="row pt-4">
                            <div className="col-lg-4 form-group">
                                <input onChange={(e) => changeProperty(item.number, 'title', e.target.value)} type="text" className="form-control" placeholder="enter property title"/>
                            </div>
                            <div className="col-lg-4 form-group">
                                <input onChange={(e) => changeProperty(item.number, 'description', e.target.value)} type="text" className="form-control" placeholder="enter property description"/>
                            </div>
                            <div className="col-lg-4 form-group">
                                <button className="btn btn-danger" onClick={() => removeProperty(item.number)}>remove property</button>
                            </div>
                        </div>
                    })}
                </div>
                <button type="submit" className="btn btn-primary">Add device</button>
            </form>
        </div>
    );
};

export default DeviceForm;