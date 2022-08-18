import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';

import { getAuth, getProblem, getProblems } from '../../api';
import { Problem } from '../../api/types';
import { useProblemState } from '../../contexts/ProblemContext';

import DefaultTemplate from '../../templates/DefaultTemplate';
import Button from '../../components/Button';
import AnswerButton from '../../components/AnswerButton';
import { useAuth } from '../../hooks/useAuth';
import { useAuthState } from '../../contexts/AuthContext';

// const problem = {
//     id: 1,
//     question: "Amazon EC2 인스턴스에서 기업은 일시적인 트랜잭션 데이터를 생성하는 애플리케이션을 개발하고 있습니다. 애플리케이션에는 조정 가능하고 일관된 IOPS를 제공할 수 있는 데이터 스토리지에 대한 액세스가 필요합니다. 솔루션 설계자는 어떤 권장 사항을 제시해야 합니까?",
//     list: [
//         "A.처리량 최적화 HDD(st1) 루트 볼륨 및 Cold HDD(sc1) 데이터 볼륨으로 EC2 인스턴스를 프로비저닝합니다. ",
//         "B. 루트 및 데이터 볼륨 역할을 할 처리량 최적화 HDD(st1) 볼륨으로 EC2 인스턴스를 프로비저닝합니다.",
//         "C. 범용 SSD(gp2) 루트 볼륨 및 프로비저닝된 IOPS SSD(io1) 데이터 볼륨으로 EC2 인스턴스를 프로비저닝합니다.",
//         "D. 범용 SSD(gp2) 루트 볼륨으로 EC2 인스턴스를 프로비저닝합니다. Amazon S3 버킷에 데이터를 저장하도록 애플리케이션을 구성합니다."
//     ],
//     answer: [3],
//     next_id: "eaca2046207dc8f58b4941552d0932b86ff03d5e",
//     prev_id: "eaca2046207dc8f58b4941552d0932b86ff03d5e",
//     description: "해설(없을수도있음 없으면 null)",
// }
const ProblemPage = () => {
    const [auth,] = useAuthState();
    const { mutate: authMutate, isLoading: isAuthLoading } = useAuth();
    const { dumpId, questionId }: {dumpId: string, questionId: string} = useParams() as any;
    const { data, isLoading, refetch, isError} = useQuery<Problem>(['dumps', dumpId, questionId], () => getProblem(dumpId, questionId), {enabled: !!auth});
    useEffect(() => {
        if (!auth) {
            authMutate();
            refetch();
        }
    }, [auth]);
    if (isError) {
        
    }
    return (
        <DefaultTemplate>
            <h2 className="sr-only">문제 풀이 페이지</h2>

            <div className="flex justify-between">
                <div className="flex items-center">
                    <button role="button" aria-label="마킹하기/마킹해제">
                        <FaStar className="text-2xl mr-2 text-yellow-400 주석어캐다는지몰라서여기에다는데,마킹된경우이거보여주면되고,마킹안된경우아래꺼보여주면됨,위에aria-label속성도마킹하기,마킹해제중하나만나오게해야함" />
                        <FaRegStar className="text-2xl mr-2 text-zinc-300 hover:animate-bounce" />
                    </button>

                    <h3 className="text-3xl font-extrabold mr-4"></h3>
                    <Button className="py-2">원문보기</Button>
                </div>

                <select className="border rounded px-2">
                    <option value="">차례로 풀기</option>
                    <option value="">무작위로 풀기</option>
                    <option value="">마킹문제 풀기(해당 문제에 별표쳐있을때만 이 항목이 나옴)</option>
                </select>
            </div>
            
            <article className="whitespace-pre-line tracking-tight leading-6 mt-4 mb-8" style={{ wordSpacing: '2px' }}>
                {"Amazon EC2 인스턴스에서 기업은 일시적인 트랜잭션 데이터를 생성하는 애플리케이션을 개발하고 있습니다.\n애플리케이션에는 조정 가능하고 일관된 IOPS를 제공할 수 있는 데이터 스토리지에 대한 액세스가 필요합니다.\n\n솔루션 설계자는 어떤 권장 사항을 제시해야 합니까?"}
            </article>

            <div>
                <AnswerButton label="A" text="처리량 최적화 HDD(st1) 루트 볼륨 및 Cold HDD(sc1) 데이터 볼륨으로 EC2 인스턴스를 프로비저닝합니다." answer />
                <AnswerButton label="B" text="루트 및 데이터 볼륨 역할을 할 처리량 최적화 HDD(st1) 볼륨으로 EC2 인스턴스를 프로비저닝합니다." pressed />
                <AnswerButton label="C" text="범용 SSD(gp2) 루트 볼륨 및 프로비저닝된 IOPS SSD(io1) 데이터 볼륨으로 EC2 인스턴스를 프로비저닝합니다." />
                <AnswerButton label="D" text="범용 SSD(gp2) 루트 볼륨으로 EC2 인스턴스를 프로비저닝합니다. Amazon S3 버킷에 데이터를 저장하도록 애플리케이션을 구성합니다." />
            </div>

            <div className="sr-only" role="status" aria-label="정답">
                A
            </div>

            <div className="flex mt-16 justify-between">
                <Button className="px-16 py-4">이전</Button>
                <Button className="px-16 py-4">정답보기</Button>
                <Button className="px-16 py-4">다음</Button>
            </div>
        </DefaultTemplate>
    )
};

export default ProblemPage;