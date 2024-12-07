import {z, ZodType} from 'zod'
import { TypeUser } from '../../../entitys/users'

const genderSchema = z.enum(['male', 'female'], {
    required_error: "Gender must be specified",
    invalid_type_error: "Gender must be 'male', 'female'"
});

const streetSchema = z.enum(["AAA Street" , "BBB Street" , "CCC Street" , "DDDStreet"] , {
    required_error : "Street must be specified",
    invalid_type_error: "This street does not exist on the server"

})

const citysSchema = z.enum(["Moscow" , "Just City" , "Peter" , "New City"], {
    required_error : "City must be specified",
    invalid_type_error : "This city does not exist on the server"
})

export const validation : ZodType<Omit<TypeUser , "id">> = z.object({
    name : z.string().min(5, {message : "Password must be at least 6 characters"}),
    email : z.string().email({message : "Invalid email address"}),
    gender : genderSchema,
    address : z.object({
        street : streetSchema,
        city : citysSchema
    }),
    phone: z.string().regex(/(?:\+|\d)[\d\-\(\) ]{9,}\d/g, {
        message: "Invalid Russian phone number format"
    }),
    website : z.string().min(1, {message : "website must not be empty"}),
    budget : z.number().min(100, {message : "budget must be bigger than 100"}).max(1000, {message : "budget must be lower than 1000"}),
    company : z.object({
        name : z.string().min(1, {message : "Password name required"}),
        catchPhrase : z.string().min(1, {message : "Company catch phrase required"})
    })

})