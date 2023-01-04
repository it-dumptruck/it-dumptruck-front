import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Star from './Star';

export default ({ dumpId, questionId, question, marked, markedOnly }: { dumpId: string, questionId: number, question: string, marked: boolean, markedOnly?: boolean }) => {
    const navigate = useNavigate();

    const moveToQuestionPage = useCallback(() => {
        navigate(`/dumps/${dumpId}/${questionId}`, {
            state: {
                initialType: (markedOnly ? 'marked' : 'sequence')
            }
        })
    }, [dumpId, questionId]);

    return (
        <div className="border shadow py-2 px-4 rounded cursor-pointer hover:shadow-md transition-shadow mt-2 first:mt-0" tabIndex={0} role="button" onClick={ moveToQuestionPage }>
            <div className="flex items-center">
                <Star checked={marked} />

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