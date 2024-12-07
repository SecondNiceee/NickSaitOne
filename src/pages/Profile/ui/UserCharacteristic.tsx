import React from 'react';
import { IProfileCongig } from '../hooks/useProfileConfig';


const UserCharacteristic = ({left, right, className} : IProfileCongig) => {
    return (
        <div className='flex gap-2 align-center px-4 py-2 justify-between gap-2'>
        <p className='md:text-xl sm:text-lg text-base text-white'>{left}</p>
        <p className={className}>{right}</p>
    </div>
    );
};

export default React.memo(UserCharacteristic);