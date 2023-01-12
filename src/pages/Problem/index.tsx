import React, { Suspense, } from 'react';
import Loading from '../../components/Loading';

import Problem from './Problem';

const ProblemPage = () => {
    return <Suspense fallback={<Loading title="덤프 목록을 불러오는 중.." />}>
        <Problem/>
    </Suspense>
};

export default ProblemPage;