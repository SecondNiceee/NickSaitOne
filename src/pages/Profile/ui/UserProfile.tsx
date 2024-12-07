import { TypeUser } from '../../../entitys/users';
import UserCharacteristic from './UserCharacteristic';
import useProfileConfig from '../hooks/useProfileConfig';

const UserProfile = ({user} : {user : TypeUser}) => {
    const usersProfileConfig = useProfileConfig(user)
    return (
        <div className='w-[100%] max-w-[800px] ml-auto mr-auto justify-center'>
            <h2 className='md:text-3xl text-2xl md:mb-8 mb-4 xl text-white font-bold text-center'>{user.name}</h2>


            <div className='flex gap-3 flex-col border-2 border-solid border-white p-3 rounded-xl'>

                {usersProfileConfig.map( (e, i) => {
                    return (
                        <UserCharacteristic className={e.className} left={e.left} right={e.right} key={i} />
                    )
                } )}
            
            </div>
        </div>
    );
};

export default UserProfile;