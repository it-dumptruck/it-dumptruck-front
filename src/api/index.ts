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

export function setUid(uid:string) { 
    client.defaults.headers.common['uid'] = uid;
}

export function clearToken() {
    client.defaults.headers.common['token'] = '';
    client.defaults.headers.common['uid'] = '';
}

export async function getAuth(){
    const { data } = await client.get('/auth');
    setToken(data);
    return data;
}


export async function getProblem(dumpId: string, questionToken: string, type: string):Promise<Problem> {
    const { data } = await client.get(`/dumps/${dumpId}/${questionToken}`, {
        headers: {
            type
        }
    });
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

export async function setMarkProblem({ dumpId, questionId, mark }: any) {
    const { data } = await client.post(`/marks/${dumpId}/${questionId}`, null, {
        headers: {
            method: mark ? 'POST' : 'DELETE'
        }
    });
    return data;
}

export default client;