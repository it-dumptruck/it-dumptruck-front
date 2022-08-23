import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LastUpdated from '../../components/lastUpdated';
import ShortenQuestion from '../../components/ShortenQuestion';
import { useAuthState } from '../../contexts/AuthContext';
import { useAuth } from '../../hooks/useAuth';
import DefaultTemplate from '../../templates/DefaultTemplate';
import { Problems, ShortProblem } from '../../api/types';
import { getProblems } from '../../api';
import Loading from '../../components/Loading';

const ProblemsPage = ({ markedOnly }: { markedOnly?: boolean }) => {
    const { dumpId }: { dumpId: string } = useParams() as any;

    const [auth, setAuth] = useAuthState();
    const { mutate: authMutate, isLoading: isAuthLoading } = useAuth();
    const { data, isLoading, refetch, isError, isSuccess } = useQuery<Problems>(['dumps', dumpId], () => getProblems(dumpId), { enabled: !!auth });
    
    useEffect(() => {
        if (!auth) {
            authMutate();
            refetch();
        }
    },[auth]);

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
                                />
                            })
                        }
                    </div>
                </>
            }


        </DefaultTemplate>
    )
};

export default ProblemsPage;