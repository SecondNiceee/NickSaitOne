import { TypeUser } from '../../../entitys/users';
import useStreetsFilter from './useStreetsFilter';
import useCitysFilter from './useCitysFilter';
import useGenderFilter from './useGenderFilter';
import useBudgetFilter from './useBudgetFilter';
import useSeacrhFilter from './useSeachFilter';



const useFilters = (users : TypeUser[]) => {

    const usersWithStreetsFilter = useStreetsFilter(users)

    const usersWithCitysFilter = useCitysFilter(usersWithStreetsFilter)

    const usersWithGenderFilter = useGenderFilter(usersWithCitysFilter)

    const usersWithBudgetFilter = useBudgetFilter(usersWithGenderFilter)

    const usersWithSeacrhFilter = useSeacrhFilter(usersWithBudgetFilter)

    return usersWithSeacrhFilter


};

export default useFilters;