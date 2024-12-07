import React from 'react';
import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';

export type TRatioInputConfig = {
    id : string,
    value : string,

}
interface IRadioInput<T extends FieldValues>{
    title : string
    register : UseFormRegister<T>,
    name : Path<T>,
    config : TRatioInputConfig[],
    error : FieldError | undefined,
}
function RadioInput<T extends FieldValues>({register, name, title, config, error} : IRadioInput<T>){
    return (
        <div className='flex flex-col gap-3 w-[100%] justify-center'>
        <p className='text-white text-xl text-center sm:text-left'>{title}</p>
        <div className='flex flex-col gap-2'>
            {config.map( (e, i) => {
                return (
                <div className='flex gap-2 items-center'>
                    <input {...register(name)} id={e.id} type="radio"  value={e.value} key={i} />
                    <label className='text-white text-xl' htmlFor={e.id}>{e.value}</label>
                </div>
                )
            } )}
            {error && <p className='text-red-500 text-xl font-bold'>{error.message}</p>}
        </div>
    </div>
    );
};

export default React.memo(RadioInput) as typeof RadioInput
