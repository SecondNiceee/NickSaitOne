import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/models/reduxHooks';
import { setSearch } from '../../../entitys/asideFilters/model/searchSlice';

export const FilterInput = () => {
    const seacrhFilter = useAppSelector(state => state.searchSlice.search)
    const dispatch = useAppDispatch()
    const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value))
    } 
    return (
        <div className='md:sticky md:col-start-5 md:col-end-13 col-start-1 col-end-13  bg-[#14131a] z-20 static top-[107.2px]'>
        <input onChange={handler} value={seacrhFilter} placeholder='Search' className='bg-[#14131a] px-4 py-3 border-solid rounded-md border-purple-400 border-2 w-[100%] ml-auto text-white' type="text" />
    </div>
    );
};
