import  { useMemo } from 'react';
import { TypeUser } from '../../../entitys/users';
import { useAppSelector } from '../../../shared/models/reduxHooks';
import { TBudgetFilter } from '../../../shared/models/filterTypes';

const useBudgetFilter = (users : TypeUser[]) => {

    const budgetFilter = useAppSelector( (state) => state.budgetSlice )
    
    const usersWithBudgetFilter = useMemo( () => {
        if (users.length){
            return users.filter( (user) => {
                if (budgetFilter){

                    if (budgetFilter.from){
                        if (user.budget < budgetFilter.from){
                            return false
                        }
                    }
                    if (budgetFilter.to){
                        if (user.budget > budgetFilter.to){
                            return false
                        }
                    }
                }
                return true
            } )
         }
         return []
    } , [users, budgetFilter] )

    return usersWithBudgetFilter
};

export default useBudgetFilter;