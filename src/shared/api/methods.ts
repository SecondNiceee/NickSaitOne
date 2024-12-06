import axios, { AxiosHeaders, AxiosHeaderValue, RawAxiosRequestHeaders } from 'axios';
import { HOST } from './HOST';
import { TypeUser } from '../../entitys/users';


type TypeAxiosHeader = AxiosHeaders | (Partial<RawAxiosRequestHeaders & {
    Accept: AxiosHeaderValue;
    "Content-Length": AxiosHeaderValue;
    "User-Agent": AxiosHeaderValue;
    "Content-Encoding": AxiosHeaderValue;
    Authorization: AxiosHeaderValue;
}> )

export const GET = async <T>({endpoint, params = {}, headers = {"Content-Type" : 'application/json'}} : {endpoint : string, params? : Record<string, any>, headers? : TypeAxiosHeader}) => {
    const response = await axios.get<T>(HOST + endpoint , {headers , params})
    return response.data
}