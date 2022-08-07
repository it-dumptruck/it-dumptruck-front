export type IDumpItem = {
    dumpID: string;
    dumpName: string;
    image: string;
    lastUpdated: number;

}

export type IDump = {
    groupName: string;
    dumps: DumpItem[];
}

export type Dumps = {
    dumps: IDump[];
}