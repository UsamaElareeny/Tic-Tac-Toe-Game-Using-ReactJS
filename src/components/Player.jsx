import { useState } from "react";
export default function Player({initialPlayerName, symbol, activeFlag}){

    const[playerName, setPlayerName] = useState(initialPlayerName);
    const [isEditing, SetIsEditing] = useState(false);
    function handleEditClick(){
        SetIsEditing((editing) => !editing);
    }
    function updatePlayerName(event){
        setPlayerName(event.target.value);
    }
    return (
        <li className={activeFlag ? "active" : undefined}>
            <span className="player">
                {isEditing ? <input defaultValue={playerName} type="text" required onChange={updatePlayerName}></input> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}