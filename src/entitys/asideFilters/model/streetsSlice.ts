import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TStreetsFilter } from "../../../shared/models/filterTypes";

const initial:TStreetsFilter = {
    "AAA Street" : false,
    "BBB Street" : false,
    "CCC Street" : false,
    "DDDStreet" : false
}

export const streetsSlice = createSlice({
    name: "streetsSlice",
    initialState: initial,
    reducers: {
        setStreet: (state, action: PayloadAction<{ street: keyof TStreetsFilter; value: boolean }>) => {
            state[action.payload.street] = action.payload.value;
        }
    }
});

export const {setStreet} = streetsSlice.actions