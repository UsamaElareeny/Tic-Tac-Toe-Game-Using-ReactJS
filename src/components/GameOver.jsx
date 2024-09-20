export default function GameOver({winner, restart}){
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner ? <p>You've Won, {winner}! </p> : <p>It's a draw! </p>}
            <button onClick={restart}>Restart</button>
        </div>
    );
}