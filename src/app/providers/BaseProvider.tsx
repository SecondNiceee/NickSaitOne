import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router';
import {Provider} from "react-redux"
import { store } from '../AppStore';


const BaseProvider = ({children} : {children:ReactNode}) => {
    return (
            <BrowserRouter>
                <Provider store={store}>
                        {children}
                </Provider>
            </BrowserRouter>
    );
};

export default BaseProvider;