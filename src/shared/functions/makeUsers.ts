import { TypeUser } from "../../entitys/users";
import { TGender, TSitys, TStreets } from "../../entitys/users/models/TypeUser";
import getRandomNumber from "./getRandomNumber";



const streets = ["AAA Street", "BBB Street" , "CCC Street", "DDDStreet"]
const citys = ["Moscow" , "Just City" , "Peter" , "New City"]


export default function makeUsers(users : TypeUser[]){ // Это функция, чтобы добавить фильтрацию, ибо в jsonplaceholder фильтровать особо не по чему 
    users.forEach( (user) => {user.budget = getRandomNumber(100, 1000)
        user.gender = ["male" , "female"][getRandomNumber(0,1)] as TGender
        user.address.city = citys[getRandomNumber(0,3)] as TSitys
        user.address.street = streets[getRandomNumber(0,3)] as TStreets
    } )
}