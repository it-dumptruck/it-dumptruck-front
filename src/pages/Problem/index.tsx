import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';

import { getAuth, getProblem, getProblems, setType } from '../../api';
import { Problem } from '../../api/types';
import { useProblemState } from '../../contexts/ProblemContext';

import DefaultTemplate from '../../templates/DefaultTemplate';
import Button from '../../components/Button';
import AnswerButton from '../../components/AnswerButton';
import { useAuth } from '../../hooks/useAuth';
import { useAuthState } from '../../contexts/AuthContext';
import Loading from '../../components/Loading';

enum TYPE { 
    SEQUENCE = 'sequence',
    RANDOM = 'reandom',
    MARKED = 'marked'
}

const ProblemPage = () => {
    const [auth,] = useAuthState();
    const { mutate: authMutate, isLoading: isAuthLoading } = useAuth();
    const { dumpId, questionId }: { dumpId: string, questionId: string } = useParams() as any;
    const { data, isLoading, refetch, isError, isSuccess } = useQuery<Problem>(['dumps', dumpId, questionId], () => getProblem(dumpId, questionId), { enabled: !!auth });
    const [korean, setKorean] = useState<boolean>(true);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [pressed, setPressed] = useState<string[] | null>(null);
    const [mark, setMark] = useState<boolean>(false);

    useEffect(() => {
        setKorean(true);
        setShowAnswer(false);
        setPressed(null);
    }, [data])

    useEffect(() => {
        if (!auth) {
            authMutate();
            refetch();
        }
    }, [auth]);
    
    const changeLanguage = useCallback(() => {
        setKorean(!korean)
    }, [korean]);

    const toggleAnswer = useCallback( () => {
        setShowAnswer(!showAnswer);
    }, [showAnswer])
    
    const toggleMark = useCallback(() => {
        setMark(!mark);
    }, [mark]);
    const changeType = useCallback((e: any) => {
        setType(e.target.value)
    },[]);

    const onPressList = useCallback((key: any) => {
        const isPress = pressed?.filter(i => i === key)
        if (!isPress || !pressed) setPressed([key]);
        else if (isPress.length === 0) setPressed([...pressed, key])
        else setPressed(pressed.filter(i => i !== key));
    }, [pressed])

    return (
        <DefaultTemplate>
            <h2 className="sr-only">문제 풀이 페이지</h2>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <button role="button" aria-label="마킹하기/마킹해제" onClick={toggleMark}>
                        {mark ? <FaStar className="text-2xl mr-2 text-yellow-400" />:
                            <FaRegStar className="text-2xl mr-2 text-zinc-300" />
                        }
                    </button>
                    <h3 className="text-3xl font-extrabold mr-4">Q{ questionId }</h3>
                    <Button className="py-2" onClick={changeLanguage}>{korean ? '원문보기' : '한글보기'}</Button>
                </div>

                <div className="flex">
                    <select className="border rounded px-2" onChange={changeType}>
                        <option value={`${TYPE.SEQUENCE}`}>차례로 풀기</option>
                        <option value={`${TYPE.RANDOM}`}>무작위로 풀기</option>
                        {
                            mark ? <option value={`${TYPE.MARKED}`}>마킹된 문제 풀기</option> : ''
                        }
                    </select>

                    <Button className="py-2 ml-2">목록 보기</Button>
                </div>
            </div>
            <article className="whitespace-pre-line tracking-tight leading-6 mt-4 mb-8" style={{ wordSpacing: '2px' }}>
                {
                    data ? (korean ? data.question : data?.question_en)
                    : <Loading title="문제를 가져오는 중.." />
                }        
            </article>
            <div>
                {
                    korean ? data?.list.map((item, index) => {
                        return <AnswerButton key={index} label={String.fromCharCode(index + 65)} text={item} answer={showAnswer && (data?.answer.filter(i => i === String.fromCharCode(index + 65)).length > 0)} pressed={pressed ? pressed.indexOf(String.fromCharCode(index + 65)) >=0 : false} onPress={onPressList} />
                    }) : data?.list_en.map((item, index) => {
                        return <AnswerButton key={index} label={String.fromCharCode(index + 65)} text={item} answer={showAnswer && (data?.answer.filter(i => i === String.fromCharCode(index + 65)).length > 0)}pressed={pressed ? pressed.indexOf(String.fromCharCode(index + 65)) >=0 : false} onPress={onPressList} />
                    })
                }
            </div>

            <div className="mt-8" role="status" aria-label="정답 및 해설">
                {showAnswer ? data?.answer : ''}
            </div>

            <div className="flex mt-16 justify-between">
                <Link to={`/dumps/${dumpId}/${+questionId-1}`}><Button className="px-16 py-4">이전</Button></Link> 
                <Button className="px-16 py-4" onClick={toggleAnswer}>정답보기</Button>
                <Link to={`/dumps/${dumpId}/${+questionId+1}`}><Button className="px-16 py-4">다음</Button></Link> 
            </div>
        </DefaultTemplate>
    )
};

export default ProblemPage;