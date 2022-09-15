import React, { useEffect } from 'react';
import {Adsense} from '@ctrl/react-adsense';

export default ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <Adsense
                style={{ display: 'block' }}
                client='ca-pub-0228887846519889'
                slot='3445887737'
                format='auto'
                responsive='true'
            />
        </div>
    );
};