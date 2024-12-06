import React from "react";
import { TCitysFilter } from "../../../../shared/models/filterTypes";
import { useAppDispatch, useAppSelector } from "../../../../shared/models/reduxHooks";
import { setCity } from "../../../../entitys/asideFilters/model/citysSlice";



const CityFilters = () => {
    
    const citysFilter = useAppSelector(state => state.citysSlice)
    const dispatch = useAppDispatch()

    const changeHandler = (city:keyof TCitysFilter) => (e : React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCity({city, value : e.target.checked}))
    }

    console.log("Рендер City Filters")

    return (
        <div className="flex flex-col gap-5 items-center">
            <p className='text-white text-xl'>City:</p>
            <div className="flex flex-col gap-4 border-solid border-2 w-[100%] border-[#2d7aff] rounded-md p-4 md:border-none md:p-0">
                <div className='flex gap-3'>
                    <input checked = {citysFilter.Moscow} onChange={changeHandler('Moscow')} id="moscow" type="checkbox" />
                    <label className='text-white text-lg' htmlFor="moscow">Moscow</label>
                </div>
                <div className='flex gap-3'>
                    <input checked = {citysFilter["Just City"]} onChange={changeHandler('Just City')} id="just-city" type="checkbox" />
                    <label className='text-white text-lg' htmlFor="just-city">Just City</label>
                </div>
                <div className='flex gap-3'>
                    <input checked = {citysFilter.Peter} onChange={changeHandler('Peter')} id="peter" type="checkbox" />
                    <label className='text-white text-lg' htmlFor="peter">Peter</label>
                </div>
                <div className='flex gap-3'>
                    <input checked = {citysFilter["New City"]} onChange={changeHandler('New City')}  id="new-city" type="checkbox" />
                    <label className='text-white text-lg' htmlFor="new-city">"New City</label>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CityFilters);