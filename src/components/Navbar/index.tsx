'use client';

import React from 'react';
import styles from './style.module.scss';
import Link from "next/link";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {userSlice} from "@/store/reducers/userSlice";
import {useDispatch} from "react-redux";
import {mockSession} from "next-auth/client/__tests__/helpers/mocks";
import user = mockSession.user;

const Navbar: React.FC = () => {
    const {isAuth, userInfo} = useTypedSelector(state => state.user);
    const {setUser, setIsAuth} = userSlice.actions;
    const dispatch = useDispatch();
    const handleSignOut = () => {
        localStorage.removeItem('token');
        dispatch(setUser(null));
        dispatch(setIsAuth(false));
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div><Link className="navbar-brand text-light" href="/">Welcome to the stop</Link></div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    {(localStorage.getItem('token') && isAuth && userInfo?.role === "ADMIN") &&

                            <li className="nav-item">
                                <Link href="/admin" className="btn btn-info mr-4" >admin panel</Link>
                            </li>
                    }
                    {localStorage.getItem('token') && isAuth
                        ?
                        <>
                            <li className="nav-item">
                                <Link href="/basket" className="btn btn-warning mr-4" >basket</Link>
                            </li>
                        <li  className="nav-item">
                            <button onClick={handleSignOut} className="btn btn-danger" >log out</button>
                        </li>
                        </>
                    :
                        <li  className="nav-item">
                            <Link className="btn btn-success" href="/auth">sing in</Link>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;