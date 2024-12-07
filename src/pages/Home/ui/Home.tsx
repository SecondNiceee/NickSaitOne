import { useAppSelector } from '../../../shared/models/reduxHooks';
import { User } from '../../../entitys/users';
import { useFilters } from '../../../features/filters';

export const Home = () => {
    const users = useAppSelector( (state) => state.usersSlice.users )

    const filteredUsers = useFilters(users)
    
    return (
        <div className="flex flex-col gap-5 mt-5 mb-5">
            {filteredUsers.map( (user, index) => <User key={index} {...user} /> )}
        </div>
    );
};
