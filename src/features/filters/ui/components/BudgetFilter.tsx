import React from "react";
import { setBudget } from "../../../../entitys/asideFilters/model/budgetSlice";
import { formatNumber, parseNumber } from "../../../../shared/functions/numberFormatter";
import { TBudgetFilter } from "../../../../shared/models/filterTypes";
import { useAppDispatch, useAppSelector } from "../../../../shared/models/reduxHooks";




const BudgeFilter = () => {

    const budget = useAppSelector(state => state.budgetSlice)
    
    const dispatch = useAppDispatch()


    const handler = (key : keyof TBudgetFilter) => (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const parsedValue = parseNumber(value);
        dispatch(setBudget({key, value : parsedValue}))
    }


    return (
        <div className='flex flex-col gap-5 items-center'>
            <p className='text-white text-xl'>Budget:</p>
            <div className='flex flex-col gap-4 border-solid border-2 border-[#2d7aff] mr-auto rounded-md p-4 md:border-none md:p-0 h-[80%] w-[80%]'>
                <div className='flex gap-4 items-center'>
                    <label className='text-white text-lg' htmlFor="from">От:</label>
                    <input value={formatNumber(budget.from)} onChange={handler('from')}  id='from' className='w-[100%] lg:w-1/3 bg-[#14131a] rounded-lg text-white px-1 py-2 border-white border-solid border-2'  name='gender' type="string" />
                </div>
                <div className='flex gap-4 items-center'>
                    <label className='text-white text-lg' htmlFor="to">До:</label>
                    <input value={formatNumber(budget.to)} onChange={handler('to')} className='w-[100%] lg:w-1/3 bg-[#14131a] rounded-lg text-white px-1 py-2 border-white border-solid border-2 ' id = "to"  name='gender' type="string" />
                </div>
            </div>
        </div>
    );
};

export default React.memo(BudgeFilter);