import client from ".";

export async function getProblems(dumpId:string,questionToken:string ) {
    const { data } = await client.get("/dump");
    return data;
}

