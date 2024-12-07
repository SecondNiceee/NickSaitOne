import React, { FC } from 'react';
import { TypeUser } from '../../entitys/users/models/TypeUser';
import Image from './Image';
import { Heart } from '../../features/favorities';


export const User:FC<TypeUser> = (user) => {
    return (
        <div className='2xl:px-32 lg:px-16 md:px-12 px-5 gap-4 py-4 flex flex-col border-solid border-[2px] rounded-md border-white cursor-pointer'>
            <div className='flex w-[100%] gap-3 items-center justify-center'>
                <h3 className='text-2xl font-mono text-[#fff]'>{user.name}</h3>
                <Image imageName='eye.svg' className='w-7 h-7' />
                <Heart user={user} />
            </div>
            <div className="flex justify-between">
                <p className='text-base md:text-xl font-mono mr-auto text-[#888]'>Place of residence: </p>
                <p className='text-base md:text-xl ml-auto font-mono   text-[#888] text-right'>{user.address.city}, {user.address.street}</p>
            </div>
            <div className="flex justify-between">
                <p className='text-base md:text-xl font-mono text-[#888]'>{"Gender:"}</p>
                <p className={`text-base md:text-xl relative font-mono text-[#888] text-right before:w-[100%] ${user.gender === "female" ? `before:bg-purple-400` : `before:bg-[#2d7aff]`} before:bg-purple-400 before:block before:absolute before:bottom-0 before:h-1`}>{user.gender}</p>
            </div>
            <div className="flex justify-between">
                <p className='text-base md:text-xl font-mono text-[#888]'>{"Budget:"}</p>
                <p className='text-base md:text-xl font-mono text-[#48ff23] text-right'>{user.budget}$</p>
            </div>
            {/* <div className="flex gap-2">
                <button className='text-base md:text-xl px-1 py-2 font-extrabold font-mono bg-orange-500 w-1/2 rounded-sm text-white'>
                    Изменить
                </button>
                <button className='text-base md:text-xl px-1 py-2 font-extrabold bg-red-500 w-1/2 rounded-sm text-white'>
                    Удалить
                </button>
            </div> */}
           
        </div>
    );
};
