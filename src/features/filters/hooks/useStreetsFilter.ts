import  { useMemo } from 'react';
import { useAppSelector } from '../../../shared/models/reduxHooks';
import { TypeUser } from '../../../entitys/users';
import { TStreetsFilter } from '../../../shared/models/filterTypes';

const useStreetsFilter = (users : TypeUser[]) => {

    const streetsFilter = useAppSelector( (state) => state.streetsSlice )

    const usersWithStreetsFilter = useMemo( () => {
        if (users.length){
           if (!Object.values(streetsFilter).every( (val) => val === false )) {
            return users.filter( (user) => {
                const falseStreets = Object.keys(streetsFilter).filter( (street) => !streetsFilter[street as keyof TStreetsFilter] )
                return !falseStreets.includes(user.address.street)
            }  )
           }
           return users
        }
        return []
    } , [streetsFilter, users] )
    
    return usersWithStreetsFilter

};

export default useStreetsFilter;