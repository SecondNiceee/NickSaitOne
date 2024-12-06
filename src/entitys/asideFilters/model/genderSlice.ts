import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TGenderFilter } from '../../../shared/models/filterTypes';

const initial:TGenderFilter = {
    female : false,
    male : false
}

export const genderSlice = createSlice({
    name: "genderSlice",
    initialState: initial,
    reducers: {
        setGender: (state, action: PayloadAction<{key : keyof TGenderFilter, value : boolean}>) => {
            const {key, value} = action.payload
            state[key] = value
        }
    }
});

export const {setGender} = genderSlice.actions


