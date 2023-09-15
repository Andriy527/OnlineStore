"use client";

import {Provider} from "react-redux";
import React, {PropsWithChildren} from "react";
import {setupStore} from "@/store";
const ReduxProvider = ({children} : PropsWithChildren<any>) => {
    const store = setupStore();

    return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider;