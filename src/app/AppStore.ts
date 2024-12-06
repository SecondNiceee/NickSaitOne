
import {configureStore} from "@reduxjs/toolkit"
import { usersSlice } from "../entitys/users"
import { budgetSlice, citysSlice, genderSlice, searchSlice, streetsSlice } from "../entitys/asideFilters"

export const store = configureStore({
    reducer : {
        usersSlice : usersSlice.reducer,
        searchSlice : searchSlice.reducer,
        genderSlice : genderSlice.reducer,
        budgetSlice : budgetSlice.reducer,
        citysSlice : citysSlice.reducer,
        streetsSlice : streetsSlice.reducer
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware({serializableCheck : false})
} )

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']