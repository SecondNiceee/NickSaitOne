import React, { useMemo } from 'react';
import { TypeUser } from '../../../entitys/users';
import { useAppSelector } from '../../../shared/models/reduxHooks';
import { TCitysFilter } from '../../../shared/models/filterTypes';

const useCitysFilter = (users : TypeUser[]) => {

    const citysFilter = useAppSelector( (state) => state.citysSlice )

    const usersWithCitysFilter = useMemo( () => {
        if (users.length){
            if (!Object.values(citysFilter).every( (val) => val === false )) {
             return users.filter( (user) => {
                 const falseCitys = Object.keys(citysFilter).filter( (street) => !citysFilter[street as keyof TCitysFilter] )
                 return !falseCitys.includes(user.address.city)
             }  )
            }
            return users
         }
         return []
    } , [users, citysFilter] )

    return usersWithCitysFilter
};

export default useCitysFilter;