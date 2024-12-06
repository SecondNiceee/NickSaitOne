import React, { useMemo } from 'react';
import { useAppSelector } from '../../../shared/models/reduxHooks';
import { TypeUser } from '../../../entitys/users';
import { TGenderFilter } from '../../../shared/models/filterTypes';

const useGenderFilter = (users : TypeUser[]) => {
    const genderFilter = useAppSelector( (state) => state.genderSlice )

    const usersWithGenderFilter = useMemo( () => {
        if (users.length){
           if (!Object.values(genderFilter).every( (val) => val === false )) {
            return users.filter( (user) => {
                const falseGenders = Object.keys(genderFilter).filter( (street) => !genderFilter[street as keyof TGenderFilter] )
                return !falseGenders.includes(user.gender)
            }  )
           }
           return users
        }
        return []
    } , [genderFilter, users] )
    
    return usersWithGenderFilter
};

export default useGenderFilter;