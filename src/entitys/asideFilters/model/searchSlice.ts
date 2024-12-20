import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {
        search : ""
    },
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        }
    }
});

export const {setSearch} = searchSlice.actions