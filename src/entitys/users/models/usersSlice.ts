
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TypeUser } from "./TypeUser"
import { GET } from "../../../shared/api/methods";
import { makeUsers } from "../../../shared/functions/makeUsers";
import { TypeStatus } from "../../../shared/models/typeStatus";



interface IInitial{
    users : TypeUser[],
    status : TypeStatus,

}

const initialState:IInitial = {
    users : [],
    status : "pending",
}

export const getUsers = createAsyncThunk( 
    'getUsers',
    async function  (_, {signal}) {
        const users = await GET<TypeUser[]>({endpoint : "/users", signal })

        makeUsers(users)

        return users
    }
 )

 let id = 11 // для имитации сервера


 export const usersSlice = createSlice({
    name : "userSlice",
    initialState : initialState,
    reducers : {
        addUser( state, action:PayloadAction<Omit<TypeUser, "id">> ){
            const newUser = action.payload
            state.users.push({...newUser, id : id})
            id+=1;
        }
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

export const {addUser} = usersSlice.actions