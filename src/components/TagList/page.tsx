'use client';

import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {setTags} from "@/store/asyncActions";
import {Itag} from "@/models";
import {deviceSlice} from "@/store/reducers/deviceSlice";

const TagList = () => {
    const dispatch = useDispatch();
    const {tags} = useTypedSelector(state => state.tag);
    const {selectedTag} = useTypedSelector(state => state.device)

    const handleTagClick = (tagId: number) => {
        dispatch(deviceSlice.actions.setDeviceByTag(tagId))
    }

    useEffect(() => {
        dispatch(setTags() as any);
    }, [])
    return (
        <div>
            <ul className="list-group pt-4">
                {tags.length && tags.map((tag: Itag) => {
                    return <li key={tag.id} onClick={() => handleTagClick(tag.id)} className={`list-group-item ${tag.id === selectedTag ? 'active' : ''}`}>{tag.name}</li>
                })}
            </ul>
        </div>
    );
};

export default TagList;