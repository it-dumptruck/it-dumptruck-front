import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams, useNavigate } from 'react-router-dom';
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
    // 문제 로딩 되었을 경우 keyboardControllerRef?.current.focus() 코드 실행해야함
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    // 어캐하는지 모름
    const [korean, setKorean] = useState<boolean>(true);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [pressed, setPressed] = useState<string[] | null>(null);
    const [mark, setMark] = useState<boolean>(false);
    const navigate = useNavigate();
    const answerButtonRef = useRef();
    const keyboardControllerRef = useRef();
    
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

    const onKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (!data) return;

        if (e.keyCode == 37) movePrev();
        else if (e.keyCode == 39) moveNext();
        else if (e.keyCode == 38) setShowAnswer(!showAnswer);

        let char;
        if (e.keyCode >= 49 && e.keyCode <= 57) char = e.keyCode + 16;
        else if (e.keyCode >= 65 && e.keyCode <= 90) char = e.keyCode
        else return;
        
        onPressList(String.fromCharCode(char))
    }, [data, showAnswer, answerButtonRef, pressed]);

    const movePrev = useCallback(() => {
        if (!data?.prev_id) return;

        navigate(`/dumps/${dumpId}/${data?.prev_id}`)
    }, [data]);

    const moveNext = useCallback(() => {
        if (!data?.next_id) return;

        navigate(`/dumps/${dumpId}/${data?.next_id}`)
    }, [data]);

    return (
        <DefaultTemplate>
            <label className="sr-only" htmlFor="keyboardControlDescription">방향키를 이용해 문제간 이동이 가능합니다. 위쪽 방향키를 눌러 정답 확인이 가능합니다.</label>
            <input id="keyboardControlDescription" type="text" className="bg-slate-200 absolute top-[-999px] left-[-999px]" onKeyDown={ onKeyDown } ref="keyboardControllerRef" autoFocus readOnly />
            <h2 className="sr-only">문제 풀이 페이지</h2>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <button role="button" aria-label="마킹하기/마킹해제" onClick={toggleMark}>
                        {mark ? <FaStar className="text-2xl mr-2 text-yellow-400" />:
                            <FaRegStar className="text-2xl mr-2 text-zinc-300" />
                        }
                    </button>
                    <h3 className="text-3xl font-extrabold mr-4">Q{ questionId }</h3>
                    <Button className="py-2" onClick={changeLanguage} onKeyDown={ onKeyDown }>{korean ? '원문보기' : '한글보기'}</Button>
                </div>

                <div className="flex">
                    <select className="border rounded px-2" onChange={changeType} onKeyDown={ onKeyDown }>
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
                        return <AnswerButton key={index} label={String.fromCharCode(index + 65)} text={item} answer={showAnswer && (data?.answer.filter(i => i === String.fromCharCode(index + 65)).length > 0)} pressed={pressed ? pressed.indexOf(String.fromCharCode(index + 65)) >=0 : false} onPress={onPressList} onKeyDown={ onKeyDown } />
                    }) : data?.list_en.map((item, index) => {
                        return <AnswerButton key={index} label={String.fromCharCode(index + 65)} text={item} answer={showAnswer && (data?.answer.filter(i => i === String.fromCharCode(index + 65)).length > 0)} pressed={pressed ? pressed.indexOf(String.fromCharCode(index + 65)) >=0 : false} onPress={onPressList} onKeyDown={ onKeyDown } />
                    })
                }
            </div>

            <div className="mt-8" role="status" aria-label="정답 및 해설">
                {showAnswer ? data?.answer : ''}
            </div>

            <div className="flex mt-16 justify-between">
                <Button className="px-16 py-4" onClick={ movePrev } onKeyDown={ onKeyDown } disabled={ data?.prev_id == null }>이전</Button>
                <Button className="px-16 py-4" onClick={toggleAnswer} onKeyDown={ onKeyDown }>정답보기</Button>
                <Button className="px-16 py-4" onClick={ moveNext } onKeyDown={ onKeyDown } disabled={ data?.next_id == null }>다음</Button>
            </div>
        </DefaultTemplate>
    )
};

export default ProblemPage;