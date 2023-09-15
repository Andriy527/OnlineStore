'use client';

import React from "react";
import {usePathname, useRouter} from "next/navigation";
import {ADMIN_PANEL_ROUTE, BASKET_ROUTE} from "@/helpers";
import {useTypedSelector} from "@/hooks/useTypedSelector";
export const Auth = ({children}: {children: React.ReactNode}) => {
    const pathName = usePathname();
    const router = useRouter();
    const {userInfo, isAuth} = useTypedSelector(state => state.user);

    if (pathName === ADMIN_PANEL_ROUTE && userInfo?.role !== 'ADMIN') {
       return router.push('/');
    }

    if (pathName === BASKET_ROUTE && !isAuth) {
        return router.push('/');
    }

    return <>
        {children}
    </>


};

export default Auth;