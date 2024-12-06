import Filters from './components/Filters';

export const FiltersAside = () => {

    return (
        
        <aside className='col-start-1 hidden gap-7 mt-5 col-end-5 md:flex flex-col top-[calc(100vh-620px)] sticky h-fit'>

        <Filters />

    </aside>
    );
};
