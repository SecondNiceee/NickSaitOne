import React, { ReactNode, useEffect } from 'react';
import { getUsers } from '../../entitys/users/models/usersSlice';
import { useAppDispatch } from '../../shared/models/reduxHooks';

// Здесь происходят все мутки которые должны быть только 1 раз в приложении!

export const EntryProvider = ({children} : {children : ReactNode}) => {

    const dispatch = useAppDispatch()
    useEffect( () => {  
        dispatch(getUsers())
    } , [dispatch] ) // Получаем Юзерсов с бэка только один раз

    return <>
    {children}</>
};
