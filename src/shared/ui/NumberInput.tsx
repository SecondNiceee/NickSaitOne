import React from 'react';
import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';
import { formatNumber, parseNumber } from '../functions/numberFormatter';

interface INumberInput<T extends FieldValues>{
    labelText : string
    name : Path<T>,
    id : string,
    placeholder : string,
    type : React.HTMLInputTypeAttribute ,
    maxLength? : number,
    error : FieldError | undefined,
    control : Control<T>
}
function NumberInput<T extends FieldValues>({error, id, labelText, name, placeholder ,type ,maxLength, control} : INumberInput<T>){
    return (
        <div className='flex flex-col gap-3'>
        <label className=' text-white text-xl' htmlFor={id}>{labelText}</label>
        <Controller

                    name={name}
                    control={control}
                    render={({ field }) => {
                        const {name, value, onChange} = field
                        return (
                            <input
                                {...field}
                                value={formatNumber(value)}
                                className={`text-white text-xl shadow-sm shadow-white p-2 rounded-md ${error && 'border-solid border-2 border-red-500'}`}
                                placeholder={placeholder}
                                maxLength={maxLength}
                                type={type}
                                onChange={(e) => {
                                    field.onChange(parseNumber(e.target.value));
                                }}
                            />
                        )
                    }}
                />
        {error && <p className='text-red-500 text-xl font-bold'>{error.message}</p>}
    </div>
    );
};
export default React.memo(NumberInput) as typeof NumberInput
