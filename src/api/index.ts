import { IDump, Dumps } from './types.d';
import axios, { Axios } from "axios";

axios.defaults.withCredentials = true;
const client = axios.create({
    baseURL: "https://f5ih972vs1.execute-api.ap-northeast-2.amazonaws.com",
});

export function setToken(jwt: string) {
    client.defaults.headers.common['token']= jwt;
}

export async function getAuth(){
    const { data } = await client.get('/auth');
    setToken(data.token)
    return data;
}


export async function getProblems(dumpId:string,questionToken:string ) {
    const { data } = await client.get("/dump");
    return data;
}


export async function getDumpsLists():Promise<IDump[]> {
    const { data } = await client.get<Dumps>('/dumps');
    return data.dumps;
}



export default client;