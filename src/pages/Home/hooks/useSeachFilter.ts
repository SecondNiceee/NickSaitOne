import  { useMemo } from 'react';
import { TypeUser } from '../../../entitys/users';
import { useAppSelector } from '../../../shared/models/reduxHooks';

const useSeacrhFilter = (users : TypeUser[]) => {

    const searchFilter = useAppSelector( (state) => state.searchSlice )
    
    const usersWithSeacrhFilter = useMemo( () => {
        if (users.length){
            return users.filter( (user) => {
                return user.name.toLocaleLowerCase().includes(searchFilter.search.toLocaleLowerCase())
            })
         }
         return []
    } , [users, searchFilter] )

    return usersWithSeacrhFilter
};

export default useSeacrhFilter;
