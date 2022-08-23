import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DefaultTemplate from '../../templates/DefaultTemplate';
import { BiErrorAlt } from 'react-icons/bi';

const ErrorPage = () => {
    const { statusCode }: { statusCode: number } = useParams() as any;

    let message = '알 수 없는 오류가 발생하였습니다.\n잠시 후 다시 시도해주세요.';

    if (statusCode == 404) message = '페이지를 찾을 수 없습니다.'

    return (
        <DefaultTemplate>
            <h2 className="sr-only">오류 페이지</h2>

            <div className="flex flex-col items-center">
                <BiErrorAlt className="w-48 h-48" />
                <h3 className="my-4 text-3xl whitespace-pre-line text-center font-bold">
                    { message }
                </h3>

                <div className="text-zinc-400">
                    error code : { statusCode }
                </div>
            </div>
        </DefaultTemplate>
    );
};

export default ErrorPage;
