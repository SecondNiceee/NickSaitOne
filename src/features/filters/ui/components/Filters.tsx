import React from 'react';
import GenderFilters from './GenderFilters';
import CityFilters from './CityFilters';
import StreetsFilters from './StreetsFilters';
import BudgetFilter from './BudgetFilter';

const Filters = () => {
    return (
        <>
                <GenderFilters />

                <CityFilters />

                <StreetsFilters />

                <BudgetFilter />
        </>
    );
};

export default Filters;