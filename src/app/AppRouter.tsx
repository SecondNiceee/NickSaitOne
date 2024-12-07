import { useEffect } from 'react';
import {Route, Routes} from "react-router"
import BaseLayout from './layout/BaseLayout';
import { Home } from '../pages/Home';
import { MobileFilters } from '../pages/MobileFilters';
import { Favorities } from '../pages/Favorities';
import { routes } from '../shared/models/routes';
const AppRouter = () => {
    

    return (
        <Routes>
            <Route element = {<BaseLayout />}>
                <Route index path={routes.home} element = {<Home />} />   
                <Route index path={routes.favorites} element = {<Favorities />} />                  
            </Route>
            <Route element = {<BaseLayout menuOnly = {true} />}>           
                <Route path={routes.mobFilters} element = {<MobileFilters  />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;