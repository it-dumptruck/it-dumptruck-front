import { IDump, Dumps, Problem, Auth } from './types.d';
import axios from "axios";

axios.defaults.withCredentials = true;
const client = axios.create({
    baseURL: process.env.REACT_APP_API,
});


export function setToken({ token, uid }: Auth) {
    if (!token || !uid) return;
    client.defaults.headers.common['token'] = token;
    client.defaults.headers.common['uid'] = uid;
}

export function clearToken() {
    client.defaults.headers.common['token'] = '';
    client.defaults.headers.common['uid'] = '';
}


export function setType(type:string = "sequence") { 
    client.defaults.headers.common['type'] = type;
}

export async function getAuth(){
    const { data } = await client.get('/auth');
    setToken(data.token)
    return data;
}


export async function getProblem(dumpId:string,questionToken:string ):Promise<Problem> {
    const { data } = await client.get(`/dumps/${dumpId}/${questionToken}`);
    return data;
}

export async function getDumpsLists():Promise<IDump[]> {
    const { data } = await client.get<Dumps>('/dumps');
    return data.dumps;
}


export async function getProblems(dumpId:string) {
    const { data } = await client.get(`/dumps/${dumpId}`);
    return data;
}

export async function getMarkedProblems(dumpId:string) {
    const { data } = await client.get(`/marks/${dumpId}`);
    return data;
}

export default client;