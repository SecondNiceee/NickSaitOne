import { useAppSelector } from '../../../shared/models/reduxHooks';
import { User } from '../../../entitys/users';
import { useFilters } from '../../../features/filters';

export const Favorities = () => {
    const favoritiesUsers = useAppSelector( (state) => state.favoritiesUser.favoritiesUsers ) // Переворачиваем для того что бы новые юзерсы были первыми

    const filteredUsers = useFilters(favoritiesUsers)
    
    return (
        <div className="flex flex-col gap-5 mt-5 mb-5">
            {filteredUsers.reverse().map( (user, index) => <User key={index} {...user} /> )}
        </div>
    );
};
