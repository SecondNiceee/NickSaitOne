import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router';
import {Provider} from "react-redux"
import { store } from '../AppStore';
import { EntryProvider } from './EntryProvider';


const BaseProvider = ({children} : {children:ReactNode}) => {
    return (
            <BrowserRouter>
                <Provider store={store}>
                        <EntryProvider>
                            {children}
                        </EntryProvider>
                </Provider>
            </BrowserRouter>
    );
};

export default BaseProvider;