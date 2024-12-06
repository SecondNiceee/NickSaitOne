import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../../widgets/Header';
import { FiltersAside } from '../../widgets/FiltersAside';
import { FilterInput } from '../../widgets/FilterInput';


const BaseLayout = ({search = true} : {search? : boolean}) => {
    return (
        <>  
            <Header />
            <main className='container grid grid-cols-12 mt-5'>
                <h3  className='sticky md:flex hidden top-[107.2px] col-start-1 text-white col-end-5 justify-center items-center text-2xl font-bold bg-[#14131a] z-20'>Фильтры</h3>

                {search && <FilterInput />}

                <FiltersAside/>

                <div className="col-start-5 col-end-13 flex flex-col">
                    <Outlet />
                </div>
            </main>
        </>
    );
};

export default BaseLayout;