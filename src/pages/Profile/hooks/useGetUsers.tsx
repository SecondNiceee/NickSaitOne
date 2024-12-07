import React, { SetStateAction, useEffect } from 'react';
import { GET } from '../../../shared/api/methods';
import { TypeUser } from '../../../entitys/users';
import { TypeStatus } from '../../../shared/models/typeStatus';
import { makeUser } from '../../../shared/functions/makeUsers';
import { useAppSelector } from '../../../shared/models/reduxHooks';

interface IUseGetUsers{
    setUser : React.Dispatch<SetStateAction<TypeUser | null>>,
    setUserStatus : React.Dispatch<SetStateAction<TypeStatus>>,
    id : string | undefined
}
const useGetUsers = ({setUser, setUserStatus, id} : IUseGetUsers) => {
    const users = useAppSelector( state => state.usersSlice.users )
    useEffect( () => {

        const controller = new AbortController()
        const signal = controller.signal

        async function getUser(id : string){
            const response = await GET<TypeUser[]>({endpoint : "/users" , params : {id : id}, signal})
            const user = response[0]
            makeUser(user)
            return user
        }
        if (!id){
            throw new Error("id was not transmitted")
        }
        else{ // Значит юзер наш, и мы не может достать его с сервера:(
            if (Number(id) > 10){
                const myUser = users.find( (user) =>  user.id === Number(id))
                if (myUser){
                    setUser(myUser)
                    setUserStatus("fulfilled")
                }
                else{
                    throw new Error("Wrong id server initation")
                }
            }
            else{
                getUser(id).then( (user) => {
                    setUserStatus("fulfilled")
                    setUser(user) 
                } ).catch(() => {
                    setUserStatus("rejected")
                } )
            }
        }
        return () => {
            controller.abort() // Если был запрос очистим пасять
        }
    } , [id, setUserStatus, users, setUser] ) 
};

export default useGetUsers;