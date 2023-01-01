import { IDump } from './../api/types.d';
import { useQueryClient } from 'react-query';
import useDumps from "./useDumps"



export const useDumpItem = (id: Number) => {
    // const { dumps } = useDumps();
    const queryClient = useQueryClient();
    const dumps = queryClient.getQueryData<IDump[]>(['dumps', 'amazone']);
    return dumps?.filter(item => item.id === id);
}