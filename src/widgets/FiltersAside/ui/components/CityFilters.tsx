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
        <div>
            <p className='text-white text-xl'>City:</p>
            <div>
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