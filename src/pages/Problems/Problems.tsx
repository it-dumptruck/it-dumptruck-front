import React, { useEffect, useLayoutEffect } from 'react';
import {  useParams } from 'react-router-dom';
import LastUpdated from '../../components/lastUpdated';
import ShortenQuestion from '../../components/ShortenQuestion';

import useQuestions from '../../hooks/useQuestions';


const ProblemsPage = ({ markedOnly }: { markedOnly: boolean }) => {
    const { dumpId }: { dumpId: string } = useParams() as any;
    const { data, isLoading ,refetch} = useQuestions({markedOnly : !!markedOnly , dumpId: dumpId});
    useLayoutEffect(() => {
        if (data) {
            refetch({markedOnly: !!markedOnly, dumpId: dumpId});
        }
    },[data, refetch, markedOnly, dumpId])
    return (
        <>
            <h2 className="sr-only">문제 리스트 페이지</h2>

            {
                <>
                    <h3 className="mt-2 text-2xl font-bold tracking-wide">{ data?.dump.dumpName }</h3>
                    <LastUpdated timestamp={ data?.dump.lastUpdated } />

                    <hr className="my-8" />

                    <div>
                        {
                            data?.lists.map((dump: any) => <ShortenQuestion dumpId={data?.dump.dumpID} questionId={+dump.questionID} question={dump.question} marked={dump.marked} markedOnly={markedOnly}/>)
                        }
                    </div>

                    {
                        data?.lists.length === 0 && 
                        <div>
                            마킹된 문제가 존재하지 않습니다.<br />
                            문제에 마킹(☆)을 하면 해당 문제들을 모아 볼 수 있습니다.
                        </div>
                    }
                </>
            }
        </>
    )
};

export default ProblemsPage;