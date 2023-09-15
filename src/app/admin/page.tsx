'use client';
import React from 'react';
import {useState, useEffect} from "react";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import BrandForm from "@/components/BrandForm";
import TagForm from "@/components/TagForm";
import DeviceForm from "@/components/DeviceForm";

const AdminPage = () => {
    const {userInfo, isAuth} = useTypedSelector(state => state.user);
    const [isBrandForm, setIsBrandForm] = useState(false);
    const [isTagForm, setIsTagForm] = useState(false);
    const [isDeviceForm, setIsDeviceForm] = useState(false);


    return (
        <div className="col-lg-8 text-center mx-auto">
            <h2 className="py-4">Welcome to admin panel {userInfo?.email}</h2>\
            {(!isBrandForm && !isTagForm && !isDeviceForm) &&
                <>
                    <button type="button" onClick={() => setIsBrandForm(true)}
                            className="btn btn-primary btn-lg btn-block">Add a new brand
                    </button>
                    <button type="button" onClick={() => setIsTagForm(true)}
                            className="btn btn-primary btn-lg btn-block">Add a new tag
                    </button>
                    <button type="button" onClick={() => setIsDeviceForm(true)} className="btn btn-primary btn-lg btn-block">Add a new product</button>
                </>
            }
            {isBrandForm && <BrandForm setIsVisible={setIsBrandForm}/>}
            {isTagForm && <TagForm setIsVisible={setIsTagForm}/>}
            {isDeviceForm && <DeviceForm setIsVisible={setIsDeviceForm}/>}
        </div>
    );
};

export default AdminPage;