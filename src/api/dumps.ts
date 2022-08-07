import { Dumps } from './types.d';
import { AxiosResponse } from "axios";
import client from ".";
import { IDump } from "./types";

export async function getDumpsLists():Promise<IDump[]> {
    const { data } = await client.get<Dumps>('/dumps');
    return data.dumps;
}

