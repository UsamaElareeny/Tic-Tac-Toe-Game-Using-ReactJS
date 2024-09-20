import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function getCurrPlayer(gameTurns){
  let currPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currPlayer = 'O';
  }
  return currPlayer;
}
function App() {
  const [turns, AddTurn] = useState([]);
  // Performing Deep Copy
  let gameBoard = [...initialGameBoard.map((insideArr) => [...insideArr])];
  for (const turn of turns){
      const {square, player} = turn;
      const {row, col} = square;
      gameBoard[row][col] = player;
  }
  let winner;
  WINNING_COMBINATIONS.forEach((combination) => {
    let firstSquare = gameBoard[combination[0].row][combination[0].column];
    let secondSquare = gameBoard[combination[1].row][combination[1].column];
    let thirdSquare = gameBoard[combination[2].row][combination[2].column];
    if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare){
      winner = firstSquare;
    }
  });

  let activePlayer = getCurrPlayer(turns);
  function onSquareClicked(rowIndex, colIndex){
    AddTurn((prevTurns) => {
      let currPlayer = getCurrPlayer(prevTurns);
      const updatedTurns = [{square:{row: rowIndex, col: colIndex}, player:currPlayer}, ...prevTurns];
      return updatedTurns;
    });
  }
  const draw = (turns.length === 9 && !winner);
  function gameRestart(){
    AddTurn([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialPlayerName="Player 1" symbol="X" activeFlag = {activePlayer === 'X'}/>
          <Player initialPlayerName="Player 2" symbol="O" activeFlag = {activePlayer === 'O'} />
        </ol>
        {(winner || draw) && <GameOver winner={winner} restart={gameRestart}></GameOver>}
        <GameBoard BoxSelect={onSquareClicked} gameBoard={gameBoard}></GameBoard>
      </div>
      <Log logInfo={turns} id="log"></Log>
    </main>
  );
}

export default App
