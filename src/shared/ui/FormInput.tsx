import React from 'react';
import {   FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';

export interface IFormInput<T extends FieldValues>{
    labelText : string
    name : Path<T>,
    id : string,
    register : UseFormRegister<T>,
    placeholder : string,
    type : React.HTMLInputTypeAttribute ,
    maxLength? : number,
    error : FieldError | undefined,
}
function FormInput<T extends FieldValues>({id, labelText, name, register, placeholder, type, maxLength, error} : IFormInput<T>){
    return (
    <div className='flex flex-col gap-3'>
        <label className=' text-white text-xl' htmlFor={id}>{labelText}</label>
        <input className={`text-white text-xl shadow-sm shadow-white p-2 rounded-md ${error && 'border-solid border-2 border-red-500'}`} id={id} placeholder={placeholder} maxLength={maxLength} type={type} {...register(name)} />
        {error && <p className='text-red-500 text-xl font-bold'>{error.message}</p>}
    </div>
    );
};

export default React.memo(FormInput) as typeof FormInput
