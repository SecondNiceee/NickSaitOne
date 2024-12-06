import React from 'react';
import {Route, Routes} from "react-router"
import BaseLayout from './layout/BaseLayout';
import { Home } from '../pages/Home';
import { MobileFilters } from '../pages/MobileFilters';
const AppRouter = () => {
    return (
        <Routes>
            <Route element = {<BaseLayout />}>
                <Route index path='/' element = {<Home />} />                
            </Route>
            <Route element = {<BaseLayout menuOnly = {true} />}>           
                <Route path='/mobfilters' element = {<MobileFilters  />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;