import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';


import Button from '../../components/Button';
import AnswerButton from '../../components/AnswerButton';
import Loading from '../../components/Loading';
import Ad from '../../components/Ad';
import useToggleMark from '../../hooks/useToggleMark';
import useProblem from '../../hooks/useProblem';
import StarToggleButton from '../../components/StartToggleButton';
import TestComponent from '../../components/TestComponent';

enum TYPE { 
    SEQUENCE = 'sequence',
    RANDOM = 'random',
    MARKED = 'marked'
}

const Problem = () => {
    const state = useLocation().state as { initialType: string };
    const { dumpId, questionId }: { dumpId: string, questionId: number } = useParams() as any;
    const [korean, setKorean] = useState<boolean>(true);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [type, setType] = useState<string>('sequence');
    const [pressed, setPressed] = useState<string[] | null>(null);
    const navigate = useNavigate();
    const keyboardControllerRef = useRef<HTMLInputElement>(null) as any;
    const { data, isFetching, isLoading } = useProblem({ dumpId,
        questionId: +questionId,
        type,
    });

    useEffect(() => {
        keyboardControllerRef.current.focus();
        setKorean(true);
        setShowAnswer(false);
        setPressed(null);
    }, [data])


    
    useEffect(() => {
        if (state?.initialType) setType(state.initialType)
    }, [state]);
    
    const changeLanguage = useCallback(() => {
        setKorean(!korean)
    }, [korean]);

    const toggleAnswer = useCallback( () => {
        setShowAnswer(!showAnswer);
    }, [showAnswer])
    

    
    const changeType = useCallback((e: any) => {
        setType(e.target.value);
        console.log(type)
    }, [type,setType]);
    
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
        // else if (e.keyCode == 192 || e.keyCode == 77) toggleMark();

        let char;
        if (e.keyCode >= 49 && e.keyCode <= 57) char = e.keyCode + 16;
        else if (e.keyCode >= 65 && e.keyCode <= 90) char = e.keyCode
        else return;
        
        onPressList(String.fromCharCode(char))
    }, [data, showAnswer, pressed, dumpId, questionId, type]);

    const movePrev = useCallback(() => {
        if (!data?.prev_id) return;

        navigate(`/dumps/${dumpId}/${data?.prev_id}`)
    }, [data]);

    const moveNext = useCallback(() => {
        if (!data?.next_id) return;

        navigate(`/dumps/${dumpId}/${data?.next_id}`)
    }, [data]);

    const moveToQuestionList = useCallback(() => {
        navigate(`/dumps/${dumpId}`)
    }, []);
   
    return (
        <>
            <label className="sr-only" htmlFor="keyboardControlDescription">방향키를 이용해 문제간 이동이 가능합니다. 위쪽 방향키를 눌러 정답 확인이 가능합니다.</label>
            <input id="keyboardControlDescription" type="text" className="bg-slate-200 absolute top-[-999px] left-[-999px]" onKeyDown={ onKeyDown } ref={ keyboardControllerRef } autoFocus readOnly />
            <h2 className="sr-only">문제 풀이 페이지</h2>

                <div className="sm:flex sm:flex-row-reverse justify-between">
                <div className="flex">
                    <select className="border rounded px-2" onChange={changeType} onKeyDown={ onKeyDown } value={ type }>
                        <option value={`${TYPE.SEQUENCE}`}>차례로 풀기</option>
                        <option value={`${TYPE.RANDOM}`}>무작위로 풀기</option>
                        {
                            !!data?.marked && <option value={`${TYPE.MARKED}`}>마킹된 문제 풀기</option>
                        }
                    </select>
                    <Button className="py-2 ml-2" onClick={ moveToQuestionList }>목록 보기</Button>
                </div>

                <div className="flex items-center mt-4 sm:mt-0">
                    <StarToggleButton questionId={+questionId} dumpId={dumpId} type={type} />
                    <h3 className="text-3xl font-extrabold mr-4">Q{ data?.id }</h3>
                    <Button className="py-2" onClick={changeLanguage} onKeyDown={ onKeyDown }>{korean ? '원문보기' : '한글보기'}</Button>
                </div>
            </div>
            
            <Ad  className="mt-2" />
            <article className="whitespace-pre-line tracking-tight leading-6 mt-4 mb-8" style={{ wordSpacing: '2px' }}>
                {
                    korean ? data?.question : data?.question_en
                } 
            </article>
            <div>
                {
                    (korean ? data?.list : data?.list_en)?.map((item, index) => {
                        let isAnswer = data?.answer.filter(i => i === String.fromCharCode(index + 65)).length ?? 0;
                        let char = String.fromCharCode(index + 65);
                        
                        return <AnswerButton key={ index } label={ char } text={ item } answer={ showAnswer && isAnswer > 0 } pressed={ pressed ? pressed.indexOf(char) >= 0 : false } onPress={ onPressList } onKeyDown={ onKeyDown } />
                    })
                }
            </div>
            <div className="flex mt-8 justify-between">
                <Button className={`px-8 sm:px-16 py-4 `} onClick={movePrev} onKeyDown={onKeyDown} disabled={data?.prev_id == null}>이전</Button>
                <Button className="px-8 sm:px-16 py-4" onClick={toggleAnswer} onKeyDown={ onKeyDown }>정답보기</Button>
                <Button className="px-8 sm:px-16 py-4" onClick={ moveNext } onKeyDown={ onKeyDown } disabled={ data?.next_id == null}>다음</Button>
            </div>

            <Ad className="mt-2" />

            <div className="mt-8" role="status">
                <div className="sr-only" aria-label="정답">
                    {showAnswer ? data?.answer : ''}
                </div>
                <div aria-label="해설">
                    {showAnswer ? data?.description : ''}
                </div>
            </div>
        </>
    )
};

export default Problem;