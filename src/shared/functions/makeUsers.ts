import { TypeUser } from "../../entitys/users";
import { TGender, TSitys, TStreets } from "../../entitys/users/models/TypeUser";
import getRandomNumber from "./getRandomNumber";



const streets = ["AAA Street", "BBB Street" , "CCC Street", "DDDStreet"]
const citys = ["Moscow" , "Just City" , "Peter" , "New City"]

interface IUserMaker{
    id : number,
    gender : TGender,
    city : TSitys,
    street : TStreets,
    budget : number
}
const usersStuff:IUserMaker[] = []

// Функция чтобы добавить юзером всякие фильтры имитация
export const makeUsers = (users : TypeUser[]) => { // Это функция, чтобы добавить фильтрацию, ибо в jsonplaceholder фильтровать особо не по чему 
    users.forEach( (user) => {user.budget = getRandomNumber(100, 1000)
        const gender = ["male" , "female"][getRandomNumber(0,1)] as TGender
        const city = citys[getRandomNumber(0,3)] as TSitys
        const street = streets[getRandomNumber(0,3)] as TStreets

        user.gender = gender
        user.address.city = city
        user.address.street = street
        usersStuff.push({id : user.id, gender, city , street, budget : user.budget })
    } )
}

export const makeUser = ( user:TypeUser ) =>{  //  getById мы делаем через сервер, поэтому нужна для правильной имитации фильтрации
    const maker = usersStuff.find(( userStuff ) => userStuff.id === user.id)
    if(maker){
        const {gender, city, street, budget} = maker
        user.gender = gender
        user.address.city = city
        user.address.street = street
        user.budget = budget
    }
}