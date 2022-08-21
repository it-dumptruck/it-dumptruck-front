import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

export default () => {
    return (
        <div className="border shadow py-2 px-4 rounded cursor-pointer hover:shadow-md transition-shadow mt-2 first:mt-0" tabIndex={0} role="button">
            <div className="flex items-center">
                <FaRegStar className="text-2xl mr-2 text-zinc-300" />

                <h4 className="text-xl font-extrabold mr-4">
                    Q1
                </h4>
            </div>
            <div className="mt-2 text-sm sm:text-base">
                회사에서 새로운 서버리스 워크로드를 배포할 준비를 하고 있습니다. 솔루션 설계자는 AWS Lambda 함수를 호출하기 위한 권한을 구성해야 합니다. 이 함수는 Amazon ...
            </div>
        </div>
    );
};