import React from 'react';
import moment from 'moment';

export default ({ timestamp }: any) => {
    const date = new Date(timestamp * 1000);
    const dateToString = moment(date).fromNow();

    return (
        <div className="text-zinc-400 text-sm">Last updated: { dateToString }</div>
    );
};