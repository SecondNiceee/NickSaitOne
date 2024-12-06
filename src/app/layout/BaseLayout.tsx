import { Outlet } from 'react-router';
import { Header } from '../../widgets/Header';
import { FiltersAside } from '../../widgets/FiltersAside';
import { FilterInput } from '../../widgets/FilterInput';
import { FilterButton } from '../../widgets/FilterButton';


const BaseLayout = ({menuOnly = false} : {menuOnly? : boolean}) => {
    return (
        <>  
            <Header />
            <main className='container grid grid-cols-12 mt-5'>
                <h3  className='sticky md:flex hidden top-[107.2px] col-start-1 text-white col-end-5 justify-center items-center text-2xl font-bold bg-[#14131a] z-20'>Фильтры</h3>

                {!menuOnly && <FilterInput />}

                {!menuOnly && <FiltersAside/>}

                {!menuOnly && <FilterButton />}

                <div className="col-start-1 col-end-13 md:col-start-5 md:col-end-13 flex flex-col">
                    <Outlet />
                </div>
            </main>
        </>
    );
};

export default BaseLayout;