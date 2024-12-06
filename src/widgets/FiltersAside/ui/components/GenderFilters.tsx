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

    console.log("Рендер гендер фильтра")

    return (
        <div>
            <p className='text-white text-xl'>Gender:</p>
            <div>
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