import axios, { AxiosHeaders, AxiosHeaderValue, GenericAbortSignal, RawAxiosRequestHeaders } from 'axios';
import { HOST } from './HOST';


type TypeAxiosHeader = AxiosHeaders | (Partial<RawAxiosRequestHeaders & {
    Accept: AxiosHeaderValue;
    "Content-Length": AxiosHeaderValue;
    "User-Agent": AxiosHeaderValue;
    "Content-Encoding": AxiosHeaderValue;
    Authorization: AxiosHeaderValue;
}> )

export const GET = async <T>({endpoint, params = {}, headers = {"Content-Type" : 'application/json'} , signal} : {endpoint : string, params? : Record<string, any>, headers? : TypeAxiosHeader, signal : GenericAbortSignal }) => {
    const response = await axios.get<T>(HOST + endpoint , {headers, params, signal})
    return response.data
}