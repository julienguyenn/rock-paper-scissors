import React from 'react';

const ScoreBoard = ({scores, winners}) => {

    let matches = scores.map((match) => {
        return (
            <li>ME: {match.option}, PC: {match.computerOption}, WINNER: {winners[match.winner]}</li>
        );
    })

    return (
        <ul>
            { matches }
        </ul>
    )
};

export default ScoreBoard;