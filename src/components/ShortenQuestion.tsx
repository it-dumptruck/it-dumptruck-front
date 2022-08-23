import React, { useCallback } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default ({ dumpId, questionId, question, marked }: { dumpId: string, questionId: string, question: string, marked: boolean }) => {
    const navigate = useNavigate();

    const moveToQuestionPage = useCallback(() => {
        navigate(`/dumps/${dumpId}/${questionId}`)
    }, [dumpId, questionId]);

    return (
        <div className="border shadow py-2 px-4 rounded cursor-pointer hover:shadow-md transition-shadow mt-2 first:mt-0" tabIndex={0} role="button" onClick={ moveToQuestionPage }>
            <div className="flex items-center">
                {marked ? <FaStar className="text-2xl mr-2 text-yellow-400" />:
                    <FaRegStar className="text-2xl mr-2 text-zinc-300" />
                }

                <h4 className="text-xl font-extrabold mr-4">
                    Q{ questionId }
                </h4>
            </div>
            <div className="mt-2 text-sm sm:text-base">
                { question }
            </div>
        </div>
    );
};