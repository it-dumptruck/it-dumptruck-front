import React, { useEffect } from 'react';

export default ({ className }: { className?: string }) => {
    useEffect(() => {
        (adsbygoogle = window.adsbygoogle || []).push({});
    }, [])

    return (
        <div className={ className }>
            <ins className="block adsbygoogle"
                data-ad-client="ca-pub-0228887846519889"
                data-ad-slot="3445887737"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    );
};