import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../shared/models/reduxHooks';
import { setStreet } from '../../../../entitys/asideFilters/model/streetsSlice';
import { TStreetsFilter } from '../../../../shared/models/filterTypes';

const StreetsFilters = () => {
    const streetsFilter = useAppSelector(state => state.streetsSlice)

    const dispatch = useAppDispatch()

    const hander = (street : keyof TStreetsFilter) => (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setStreet({street, value : e.target.checked}))
    }

    return (
        <div className='flex flex-col gap-5 items-center'>
            <p className='text-white text-xl'>Street:</p>
            <div className='flex flex-col gap-4 border-solid w-[100%] border-2 border-[#2d7aff] rounded-md p-4 md:border-none md:p-0'>
                <div className='flex gap-3'>
                    <input checked = {streetsFilter['AAA Street']} onChange={hander('AAA Street')} id = "AStreet" name='gender' type="checkbox" />
                    <label className='text-white text-lg' htmlFor="AStreet">AAA Street</label>
                </div>
                <div className='flex gap-3'>
                    <input checked = {streetsFilter['BBB Street']} onChange={hander('BBB Street')} id='BStreet' name='gender' type="checkbox" />
                    <label className='text-white text-lg' htmlFor="BStreet">BBB Street</label>
                </div>
                <div className='flex gap-3'>
                    <input checked = {streetsFilter['CCC Street']} onChange={hander('CCC Street')} name='gender' id='CStreet' type="checkbox" />
                    <label className='text-white text-lg' htmlFor="CStreet">CCC Street</label>
                </div>
                <div className='flex gap-3'>
                    <input checked = {streetsFilter.DDDStreet} onChange={hander('DDDStreet')} id='DStreet'  name='gender' type="checkbox" />
                    <label className='text-white text-lg' htmlFor="DStreet">DDDStreet</label>
                </div>
            </div>
        </div>
    );
};

export default React.memo(StreetsFilters);