import  { FC } from 'react';
import { TypeUser } from '../../entitys/users/models/TypeUser';
import Image from './Image';
import { Heart } from '../../features/favorities';
import { Link } from 'react-router';
import { getProfileRoute } from '../functions/getProfileRoute';
import cl from "./styles.module.css";


export const User:FC<TypeUser> = (user) => {
    return (
        <div className='2xl:px-32 lg:px-16 md:px-12 px-5 gap-4 py-4 flex flex-col border-solid border-[2px] rounded-md border-white cursor-pointer relative'>
            <Link to={getProfileRoute(String(user.id))} className = "absolute left-0 top-0 w-[100%] h-[100%]"/>
            <div className='flex w-[100%] gap-3 items-center justify-center'>
                <h3 className='text-2xl font-mono text-[#fff]'>{user.name}</h3>
                <Image imageName='eye.svg' className='w-7 h-7' />
                <Heart className={'z-10 relative'} user={user} />
            </div>
            <div className="flex justify-between">
                <p className={`${cl.p} mr-auto`}>Place of residence: </p>
                <p className={`${cl.p} text-right`}>{user.address.city}, {user.address.street}</p>
            </div>
            <div className="flex justify-between">
                <p className={cl.p}>{"Gender:"}</p>
                <p className={`${cl.p} relative text-right before:w-[100%] ${user.gender === "female" ? `before:bg-purple-400` : `before:bg-[#2d7aff]`} before:block before:absolute before:bottom-0 before:h-1`}>{user.gender}</p>
            </div>
            <div className="flex justify-between">
                <p className={`${cl.p}`}>{"Budget:"}</p>
                <p className={`${cl.p} text-[#48ff23] text-right`}>{user.budget}$</p>
            </div>

        </div>
    );
};
