import React, { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/models/reduxHooks';
import { TypeUser } from '../../../entitys/users';
import { addToFavorities, removeFavorities } from '../../../entitys/favoritiesUsers/models/favoritiesUsersSlice';

const HeartLogics = (user:TypeUser) => {
    const favoritiesIds = useAppSelector( state => state.favoritiesUser.favoritiesUsersIds )

    const dispatch = useAppDispatch()

    const isActive = useMemo( () => {
        return favoritiesIds.includes(user.id)
    } , [favoritiesIds, user.id] )

    const handler = () => {
        if(isActive){
            dispatch(removeFavorities(user))
        }
        else{
            dispatch(addToFavorities(user))
        }
    }
    return {isActive, handler}
};

export default HeartLogics;