'use client';
import React, {useState} from 'react';
import {setBrand} from "@/services/deviceServices";

interface Props {
    setIsVisible: React.SetStateAction<boolean>
}
const BrandForm = ({setIsVisible}: Props) => {
    const [brandName, setBrandName] = useState('');
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setBrand({name: brandName});
        setBrandName('');
        setIsVisible(false);
    } 
    return (
        <div className="card p-4">
            <button type="submit" className="btn btn-secondary my-4" onClick={() => setIsVisible(false)}>Back to pannel</button>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleFormSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Brand name</label>
                    <input value={brandName} onChange={(e) => setBrandName(e.target.value)} type="text" className="form-control"
                           placeholder="Enter brand name" />
                </div>
                <button type="submit" className="btn btn-primary">Add brand</button>
            </form>
        </div>
    );
};

export default BrandForm;