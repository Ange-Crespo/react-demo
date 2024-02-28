import React from "react";

interface Props {
    game: IGame
}
 
export const GameItem : React.FC<Props> = ({game}) => {
    return (
        <div>
            <h2>Nom du jeu: { game.gameName }</h2>
            <span>Editeur du jeu: { game.editorName }</span><br />
            <span>Nom du jeu: { game.gameName }</span><br />
            <span>Nom du jeu: { game.category }</span>  
        </div> 
    )
}

