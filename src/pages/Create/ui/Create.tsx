import React from 'react';
import { CreateUser } from '../../../features/createUser';

export const Create = () => {
    return (
        <div className='w-[100%] justify-center flex flex-col mt-5 gap-10 items-center mb-5'>
            <h2 className='text-white text-3xl sm:text-4xl md:text-5xl text-center'>Create user</h2>
            <CreateUser />
        </div>
    );
};
    