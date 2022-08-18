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

export type Problem = {
    id: number;
    question: string;
    question_en: string;
    answer: string[];
    list: string[];
    list_en: string[];
    prev_id?: string;
    next_id?: string;
    description: string;
    marked: boolean;
    user_answer?: string[];
}
export type Auth = {
    token: string | null;
    uid: string | null;
}