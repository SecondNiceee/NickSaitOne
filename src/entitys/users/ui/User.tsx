import React, { FC } from 'react';
import { TypeUser } from '../models/TypeUser';


export const User:FC<TypeUser> = (props) => {
    return (
        <div className='2xl:px-32 lg:px-16 md:px-12 px-5 gap-4 py-4 flex flex-col border-solid border-[2px] rounded-md border-white'>
            <h3 className='text-2xl font-mono text-[#fff] ml-auto mr-auto '>{props.name}</h3>
            <div className="flex justify-between">
                <p className='text-base md:text-xl font-mono mr-auto text-[#888]'>Place of residence: </p>
                <p className='text-base md:text-xl ml-auto font-mono   text-[#888]'>{props.address.city}, {props.address.street}</p>
            </div>
            <div className="flex justify-between">
                <p className='text-base md:text-xl font-mono text-[#888]'>{"Gender:"}</p>
                <p className='text-base md:text-xl font-mono text-[#888]'>{props.gender}</p>
            </div>
            <div className="flex justify-between">
                <p className='text-base md:text-xl font-mono text-[#888]'>{"Budget:"}</p>
                <p className='text-base md:text-xl font-mono text-[#48ff23]'>{props.budget}$</p>
            </div>
            <div className="flex gap-2">
                <button className='text-base md:text-xl px-1 py-2 font-extrabold font-mono bg-orange-500 w-1/2 rounded-sm text-white'>
                    Изменить
                </button>
                <button className='text-base md:text-xl px-1 py-2 font-extrabold bg-red-500 w-1/2 rounded-sm text-white'>
                    Удалить
                </button>
            </div>
           
        </div>
    );
};
