export type TSitys = "Moscow" | "Just City" | "Peter" | "New City"
export type TStreets = "AAA Street" | "BBB Street" | "CCC Street" | "DDDStreet"
export type TGender = "male" | "female"
export type TypeUser = {
    id : number,
    name : string,
    email : string,
    gender : TGender
    address : {
        street : TStreets,
        city : TSitys,
    },
    phone : string,
    website : string,
    budget : number
    company : {
        name : string,
        catchPhrase : string,                                      
    }
}