
export default function GameBoard({BoxSelect, gameBoard}){
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) =>
                    <li key={colIndex}> <button onClick={() => BoxSelect(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button> </li> ) }
                </ol>
            </li>
            )}
        </ol>
    );
}