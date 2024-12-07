import {Route, Routes} from "react-router"
import BaseLayout from './layout/BaseLayout';
import { Home } from '../pages/Home';
import { MobileFilters } from '../pages/MobileFilters';
import { Favorities } from '../pages/Favorities';
import { routes } from '../shared/models/routes';
import { Profile } from '../pages/Profile';
import { Create } from '../pages/Create';
const AppRouter = () => {
    

    return (
        <Routes>
            <Route element = {<BaseLayout />}>
                <Route index path={routes.home} element = {<Home />} />   
                <Route index path={routes.favorites} element = {<Favorities />} />                  
            </Route>
            <Route element = {<BaseLayout menuOnly = {true} />}>           
                <Route path={routes.mobFilters} element = {<MobileFilters  />} />
                <Route index path={routes.profile} element = {<Profile />} />       
                <Route index path={routes.create} element = {<Create />} />     
            </Route>
        </Routes>
    );
};

export default AppRouter;