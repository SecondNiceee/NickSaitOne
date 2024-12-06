
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TypeUser } from "./TypeUser"
import { GET } from "../../../shared/api/methods";
import getRandomNumber from "../../../shared/functions/getRandomNumber";
import makeUsers from "../../../shared/functions/makeUsers";




interface IInitial{
    users : TypeUser[],
    status : "pending" | "rejected" | "fulfilled",

}

const initialState:IInitial = {
    users : [],
    status : "pending"
}
export const getUsers = createAsyncThunk( 
    'getUsers',
    async function  () {
        const users = await GET<TypeUser[]>({endpoint : "/users" })

        makeUsers(users)

        return users
    }
 )
export const usersSlice = createSlice({
    name : "userSlice",
    initialState : initialState,
    reducers : {

    },
    extraReducers(builder) {
        builder.addCase( getUsers.rejected, ( state ) => {
            state.status = "rejected"
        } )
        builder.addCase( getUsers.pending, ( state ) => {
            state.status = "pending"
        } )
        builder.addCase(getUsers.fulfilled, ( state, action:PayloadAction<TypeUser[]> ) => {

            state.status = "fulfilled"

            state.users.push(...action.payload as TypeUser[])

        } )
    },

})
