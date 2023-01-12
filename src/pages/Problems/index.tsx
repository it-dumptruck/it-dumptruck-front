import React, { Suspense, } from 'react';
import Loading from '../../components/Loading';

import Problems from './Problems';

const ProblemPage = ({ markedOnly }: { markedOnly?: boolean }) => {
    return <Suspense fallback={<Loading title="덤프 목록을 불러오는 중.." />}>
        <Problems markedOnly={!!markedOnly} />
    </Suspense>
};

export default ProblemPage;