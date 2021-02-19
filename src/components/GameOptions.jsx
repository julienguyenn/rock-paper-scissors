import React, { useState } from 'react';


const GameOptions = ({handleClick, gameOptions}) => {
    return (
        <div>
            <button onClick={() => handleClick(gameOptions.paper)}>Paper</button>
            <button onClick={() => handleClick(gameOptions.rock)}>Rock</button>
            <button onClick={() => handleClick(gameOptions.scissors)}>Scissors</button>
        </div>
    )
}

export default GameOptions;