import React from 'react';

const Result = ({result, winners}) => {
    let stringValue = winners[result];

    return <h1>{stringValue}</h1>
};

export default Result;