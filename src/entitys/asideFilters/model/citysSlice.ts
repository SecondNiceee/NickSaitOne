import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCitysFilter } from '../../../shared/models/filterTypes';

const initial:TCitysFilter = {
    "Just City" : false,
    "New City" : false,
    "Moscow" : false,
    "Peter" : false
}

export const citysSlice = createSlice({
    name: "citysSlice",
    initialState: initial,
    reducers: {
        setCity: (state, action: PayloadAction<{ city: keyof TCitysFilter; value: boolean }>) => {
            state[action.payload.city] = action.payload.value;
        }
    }
});

export const {setCity} = citysSlice.actions