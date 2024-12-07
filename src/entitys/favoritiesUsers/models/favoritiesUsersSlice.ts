import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeUser } from "../../users";

interface IInitial  {
    favoritiesUsers : TypeUser[],
    favoritiesUsersIds : number[]
}

const initial:IInitial = {
    favoritiesUsers : [],
    favoritiesUsersIds : []
}

export const favoritiesUsers = createSlice( {
    name : "favoritiesUser",
    initialState : initial,
    reducers : {
        addToFavorities(state, action:PayloadAction<TypeUser>) {
            const user = action.payload
            state.favoritiesUsers.push(user)
            state.favoritiesUsersIds.push(user.id)
        },
        removeFavorities(state, action : PayloadAction<TypeUser>){

            const user = action.payload

            state.favoritiesUsers = state.favoritiesUsers.filter( (e, id) => {
                return e.id !== user.id
            } )

            state.favoritiesUsersIds = state.favoritiesUsersIds.filter( e => e!==user.id  )
        }
    }
} )

export const {addToFavorities, removeFavorities} = favoritiesUsers.actions