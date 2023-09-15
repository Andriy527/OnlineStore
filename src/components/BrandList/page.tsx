'use client';

import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {setBrands} from "@/store/asyncActions";
import {Ibrand} from "@/models";
import {deviceSlice} from "@/store/reducers/deviceSlice";

const BrandList = () => {
    const dispatch = useDispatch();
    const {brands} = useTypedSelector(state => state.brand);
    const {selectedBrand} = useTypedSelector(state => state.device);

    const handleBrandClick = (brandId: number) => {
        dispatch(deviceSlice.actions.setDeviceByBrand(brandId))
    }

    useEffect(() => {
        dispatch(setBrands() as any);
    },[])

    return (
        <div>
            <div className="btn-group py-4" role="group">
                {brands.length && brands.map((brand: Ibrand) => {
                  return <button onClick={() => handleBrandClick(brand.id)} key={brand.id} type="button" className={`btn btn-${brand.id === selectedBrand ? 'primary' : 'secondary'}`}>{brand.name}</button>
                })}
            </div>
        </div>
    );
};

export default BrandList;