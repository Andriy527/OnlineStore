'use client';
import React, {useState} from "react";
import {setTag} from "@/services/deviceServices";

interface Props {
    setIsVisible: React.SetStateAction<boolean>
}
const TagForm = ({setIsVisible}: Props) => {
    const [tagName, setTagName] = useState('');

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setTag({name: tagName});
        setTagName('');
        setIsVisible(false);
    }
    return (
        <div className="card p-4">
            <button type="submit" className="btn btn-secondary" onClick={() => setIsVisible(false)}>Back to pannel</button>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tag name</label>
                    <input value={tagName} onChange={(e) => setTagName(e.target.value)} type="text" className="form-control"
                           placeholder="Enter Tag name" />
                </div>
                <button type="submit" className="btn btn-primary">Add tag</button>
            </form>
        </div>
    );
};

export default TagForm;