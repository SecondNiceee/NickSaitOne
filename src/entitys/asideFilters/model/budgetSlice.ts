import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TBudgetFilter } from '../../../shared/models/filterTypes';

const initial:TBudgetFilter = {
    from : null,
    to : null
} 

export const budgetSlice = createSlice({
    name: "budgetSlice",
    initialState: initial,
    reducers: {
        setBudget: (state, action: PayloadAction<{key : keyof TBudgetFilter, value : number | null}>) => {
            const {key, value} = action.payload
            state[key] = value
        }
    }
});

export const {setBudget} = budgetSlice.actions

