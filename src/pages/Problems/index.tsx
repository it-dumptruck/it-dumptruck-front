import React, { FC, useRef, useState } from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';

const problem = {
    id: 1,
    question: "Amazon EC2 인스턴스에서 기업은 일시적인 트랜잭션 데이터를 생성하는 애플리케이션을 개발하고 있습니다. 애플리케이션에는 조정 가능하고 일관된 IOPS를 제공할 수 있는 데이터 스토리지에 대한 액세스가 필요합니다. 솔루션 설계자는 어떤 권장 사항을 제시해야 합니까?",
    list: [
        "A.처리량 최적화 HDD(st1) 루트 볼륨 및 Cold HDD(sc1) 데이터 볼륨으로 EC2 인스턴스를 프로비저닝합니다. ",
        "B. 루트 및 데이터 볼륨 역할을 할 처리량 최적화 HDD(st1) 볼륨으로 EC2 인스턴스를 프로비저닝합니다.",
        "C. 범용 SSD(gp2) 루트 볼륨 및 프로비저닝된 IOPS SSD(io1) 데이터 볼륨으로 EC2 인스턴스를 프로비저닝합니다.",
        "D. 범용 SSD(gp2) 루트 볼륨으로 EC2 인스턴스를 프로비저닝합니다. Amazon S3 버킷에 데이터를 저장하도록 애플리케이션을 구성합니다."
    ],
    answer: [3],
    next_id: "eaca2046207dc8f58b4941552d0932b86ff03d5e",
    prev_id: "eaca2046207dc8f58b4941552d0932b86ff03d5e",
    description: "해설(없을수도있음 없으면 null)",
}

// const OneAnswerList = ({ list, onChange,disabled }: any) => {
//     return <>
//         {list.map((item: string, index: number) => {
//             return <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
//                 <input type="radio" name="problem" value={index} style={{ marginRight: '10px' }} onChange={onChange} disabled={disabled} />
//                 <div style={{ flex: 1 }}>{item}</div>
//             </label>
//         })}
//     </>
// }

// const MultiAnswerList = ({ list, onChange, disabled }: any) => {
//     return <>
//         {list.map((item: string, index: number) => {
//             return <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
//                 <input type="radio" name="problem" value={index} style={{ marginRight: '10px' }} />
//                 <div style={{ flex: 1 }}>{item}</div>
//             </label>
//         })}
//     </>
// }

const Problems = () => {
    const [disabled, setDisabled] = useState<number[]>([]);
    const [prev, setPrev] = useState();
    const onChange =  (index:any) => {
        setDisabled((prev:any) => {
            return [...prev, index]
        });
    }
    return (
        <DefaultTemplate>
            <div>
                Question {problem.id}:
            </div>
            <div>
                { problem.question}
            </div>
            {problem.list.map((item: string, index: number) => {
                return <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }} key={index}>
                  <input type="radio" name="problem" value={index} style={{ marginRight: '10px' }} onChange={() => onChange(index)} disabled={disabled.includes(index) ? true : false}  />
                <div style={{ flex: 1 }}>{item}</div>
            </label>
            })}
        </DefaultTemplate>

    );
};

export default Problems;