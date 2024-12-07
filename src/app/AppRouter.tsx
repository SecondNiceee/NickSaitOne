import {Route, Routes} from "react-router"
import BaseLayout from './layout/BaseLayout';
import { Home } from '../pages/Home';
import { Favorities } from '../pages/Favorities';
import { routes } from '../shared/models/routes';
import { Profile } from '../pages/Profile';
import { Create } from '../pages/Create';
import { LazyRoute } from "../shared/ui/LazyRoute";
import { AboutSait } from "../pages/AboutSait";
const AppRouter = () => {
    

    return (
        <Routes>
            <Route element = {<BaseLayout />}>
                <Route index path={routes.home} element = { <LazyRoute Comp = {<Home />} /> } />   
                <Route index path={routes.favorites} element = { <LazyRoute Comp = {<Favorities />} /> } />                  
            </Route>
            <Route element = {<BaseLayout menuOnly = {true} />}>           
                <Route path={routes.mobFilters} element = { <LazyRoute Comp = {<Favorities />} /> } />
                <Route index path={routes.profile} element = { <LazyRoute Comp = {<Profile />}  /> } />       
                <Route index path={routes.create} element = { <LazyRoute Comp = {<Create />} />} />     
                <Route index path={routes.aboutSait} element = { <LazyRoute Comp = {<AboutSait />} />} />     
            </Route>
        </Routes>
    );
};

export default AppRouter;