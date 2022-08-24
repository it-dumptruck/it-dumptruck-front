import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import LastUpdated from '../../components/lastUpdated';
import ShortenQuestion from '../../components/ShortenQuestion';
import { useAuthState } from '../../contexts/AuthContext';
import { useAuth } from '../../hooks/useAuth';
import DefaultTemplate from '../../templates/DefaultTemplate';
import { Problems, ShortProblem } from '../../api/types';
import { getMarkedProblems, getProblems } from '../../api';
import Loading from '../../components/Loading';
import Ad from '../../components/Ad';

const ProblemsPage = ({ markedOnly }: { markedOnly?: boolean }) => {
    const { dumpId }: { dumpId: string } = useParams() as any;
    const navigate = useNavigate();

    const [auth, setAuth] = useAuthState();
    const { mutate: authMutate, isLoading: isAuthLoading } = useAuth();
    const { data, isLoading, refetch, isError, isSuccess } = useQuery<Problems>(['questionList', dumpId, markedOnly], () => getProblemsWrapFn(dumpId), {
        enabled: !!auth, cacheTime: 0, retry: 1,
        onError: (error: any) => {
            // navigate(`/errors/${error.response.status}`)
            if (error.response.status === 401) {
                authMutate();
                refetch();
            } else {
                navigate(`/errors/${error.response.status}`);
            }
        }})
    
    const getProblemsWrapFn = (dumpId: any) => {
        return markedOnly ? getMarkedProblems(dumpId) : getProblems(dumpId);
    }

    // useEffect(() => {
    //     if (isError) {
    //         authMutate();
    //         refetch();
    //     }
    // }, [isError]);

    useEffect(() => {
        if (!auth) {
            authMutate();
            refetch();
        }
    },[auth]);

    useEffect(() => {
        if (isError) navigate(`/errors/404`)
    },[isError]);

    return (
        <DefaultTemplate>
            <h2 className="sr-only">문제 리스트 페이지</h2>

            {
                isLoading ? <Loading title="문제 목록을 불러오는 중.." /> : 
                <>
                    <h3 className="mt-2 text-2xl font-bold tracking-wide">{ data?.dump.dumpName }</h3>
                    <LastUpdated timestamp={ data?.dump.lastUpdated } />

                    <hr className="my-8" />

                    <div>
                        {
                            data?.lists.map((dump: ShortProblem) => {
                                return <ShortenQuestion
                                    dumpId={data?.dump.dumpID}
                                    question={dump.question}
                                    questionId={dump.questionID}
                                    marked={dump.marked}
                                    markedOnly={markedOnly}
                                />
                            })
                        }
                    </div>

                    {
                        data?.lists.length == 0 && 
                        <div>
                            마킹된 문제가 존재하지 않습니다.<br />
                            문제에 마킹(☆)을 하면 해당 문제들을 모아 볼 수 있습니다.
                        </div>
                    }
                </>
            }

        </DefaultTemplate>
    )
};

export default ProblemsPage;