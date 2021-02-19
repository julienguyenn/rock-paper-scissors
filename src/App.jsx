import './App.css';
import React, { useState, useEffect } from 'react';
import GameOptions from './components/GameOptions';
import Computer from './components/Computer';
import Result from './components/Result';
import ScoreBoard from './components/ScoreBoard';
const gameOptions = {"rock": "rock", "paper": "paper", "scissors": "scissors"};

function App() {
  const [option, setOption] = useState('');
  const [computerOption, setComputerOption] = useState('');
  const [result, setResult] = useState('');
  const [scores, setScore] = useState([]);
  const winners = {1: "I win", 2: "Its a tie", 0: "Computer wins"};

  const handleWinner = (winner) => {
    let prevState = scores;
    prevState.push({
      option,
      computerOption,
      winner
    });
    setScore(prevState);
    setResult(winner);
  };

  const checkWinner = () => {
    if (option === gameOptions.rock && computerOption === gameOptions.scissors) {
      handleWinner(1);
    } else if (option === gameOptions.scissors && computerOption === gameOptions.paper) {
      handleWinner(1);
    } else if (option === gameOptions.paper && computerOption === gameOptions.rock) {
      handleWinner(1);
    } else if (option === computerOption) {
      handleWinner(2);
    } else {
      handleWinner(0);
    }
  };

  const callComputer = () => {
    const optionsForComputer = [gameOptions.rock, gameOptions.paper, gameOptions.scissors];
    const random = Math.floor(Math.random() * optionsForComputer.length);
    setComputerOption(optionsForComputer[random]);
    checkWinner();
  };

  const handleClick = (stringInput) => {
    setOption(stringInput);
    callComputer();
  }

  return (
    <div className="App">
      <GameOptions handleClick={handleClick} gameOptions={gameOptions} />
      <Computer computerOption={computerOption}/>
      <Result result={result} winners={winners}/>
      <ScoreBoard scores={scores} winners={winners}/>
    </div>
  );
}

export default App;