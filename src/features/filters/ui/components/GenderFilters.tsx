import React from "react";
import { TGenderFilter } from "../../../../shared/models/filterTypes";
import { useAppDispatch, useAppSelector } from "../../../../shared/models/reduxHooks";
import { setGender } from "../../../../entitys/asideFilters/model/genderSlice";

const GenderFilters = () => {

    const genderFilter = useAppSelector( state => state.genderSlice )
    const dispatch = useAppDispatch()

    const handler = (key : keyof TGenderFilter) => (e : React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setGender({key, value : e.target.checked}))
    }


    return (
        <div className="flex flex-col gap-5 items-center">
            <p className='text-white text-xl'>Gender:</p>
            <div className="flex flex-col gap-4 border-solid border-2 w-[100%] h-[100%] border-[#2d7aff] rounded-md p-4 md:border-none md:p-0">
                <div className='flex gap-3'>
                    <input checked = {genderFilter.male} onChange={handler('male')} id='male'  name='gender' type="checkbox" />
                    <label className='text-white text-lg' htmlFor="male">Male</label>
                </div>
                <div className='flex gap-3'>
                    <input checked = {genderFilter.female} onChange={handler('female')} id='female' name='gender' type="checkbox" />
                    <label className='text-white text-lg' htmlFor="female">Female</label>
                </div>
            </div>
        </div>
    );
};

export default React.memo(GenderFilters);