'use client'

import React, {FC, useState} from 'react';
import {login, registration} from "@/services/userServices";
import {useDispatch} from "react-redux";
import {userSlice} from "@/store/reducers/userSlice";
import {useRouter} from "next/navigation";

const AuthForm: FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const dispatch = useDispatch();

    const {setUser, setIsAuth} = userSlice.actions;

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const user = await (isLogin ? login(email, password) : registration(email, password))

            dispatch(setUser(user))
            dispatch(setIsAuth(true))

            setEmail('');
            setPassword('');

            router.push('/');

        } catch (e: any) {
            throw new Error(e.response.data.message)
        }
    }

    return (
        <div className="col-lg-8 mx-auto card p-4 mt-5">
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleFormSubmit(e)}>
                <h2>Please sign in</h2>
                <div className="form-group">
                    <label htmlFor="email">Enter the email</label>
                    <input className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Enter the password</label>
                    <input className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password"/>
                </div>
                {isLogin
                    ?  <>
                        <p>You dont have account? <span className="text-underline text-warning" onClick={() => setIsLogin(false)}>create account now.</span></p>
                        <button className="btn btn-primary" type="submit">Login</button>
                    </>
                    :<>
                        <p>I have account <span className="text-underline text-warning" onClick={() => setIsLogin(true)}>sing in now.</span></p>
                        <button className="btn btn-primary" type="submit">Register</button>
                    </>
                }

            </form>
        </div>
    );
};

export default AuthForm;