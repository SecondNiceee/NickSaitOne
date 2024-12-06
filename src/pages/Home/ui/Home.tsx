import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/models/reduxHooks';
import { getUsers } from '../../../entitys/users/models/usersSlice';
import { User } from '../../../entitys/users';
import useFilters from '../hooks/useFilters';

export const Home = () => {
    const users = useAppSelector( (state) => state.usersSlice.users )

    const dispatch = useAppDispatch()

    const filteredUsers = useFilters(users)
    
    useEffect( () => {  
        dispatch(getUsers())
    } , [] )

    console.log("Main render")

    return (
        <div className="flex flex-col gap-5 mt-5 mb-5">
            {filteredUsers.map( (user, index) => <User key={index} {...user} /> )}
        </div>
    );
};
