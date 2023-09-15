'use client';

import React from 'react';
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {deviceSlice} from "@/store/reducers/deviceSlice";

const Pagination = () => {
    const {count, limit, page} = useTypedSelector(state => state.device);
    const pagesCount = Math.ceil(count / limit);
    const dispatch = useDispatch();
    const pages = Array(pagesCount).fill(null).map((_, i) => i + 1);

    const setPage = (pagesCount: number) => {
        dispatch(deviceSlice.actions.setDevicePage(pagesCount))
    }

    return (
        <div className="pt-5">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {(pagesCount > 1 && page > 1) && <li onClick={() => setPage(page - 1)} className="page-item"><span className="page-link">Previous</span></li>}
                    {pages.map((pageCount: number) => {
                        return <li onClick={() => setPage(pageCount)} key={pageCount} className={`page-item ${pageCount === page ? 'active' : ''}`}><span className="page-link">{pageCount}</span></li>
                    })}
                    {(pagesCount > 1 && page < pages.length) && <li onClick={() => setPage(page + 1)} className="page-item"><span className="page-link">Next</span></li>}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;