import useProblem from "./useProblem";
import useToggleMark from "./useToggleMark";


const useData = ({ dumpId, questionId, type }: { dumpId: string, questionId: number, type: string }) => {
    const { data, isLoading, isFetching } = useProblem({dumpId, questionId, type});
    const { mutate, isLoading:toggleLoading } = useToggleMark();
    
    return {
        data,
        isLoading,
        isFetching: isFetching || toggleLoading,
        startToggle: mutate,
    }
}

export default useData