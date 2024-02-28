import * as React from 'react';
// import { Dispatch } from 'redux';
// import { useDispatch } from 'react-redux';
import { AppContext } from '../context';


interface Props {
    game: IGame
    removeGame: (game: IGame) => void
}

export const GameComponent: React.FC<Props> = ({ game, removeGame }) => {
    const {state, dispatch} =  React.useContext(AppContext);

    return (
    <div>
        <h2>Nom du jeu: { game.gameName } !</h2>
        {game.editorName?<p>Nom de l'éditeur : {game.editorName}</p>:""}
        {game.gameYear?<p>Année de publication : {game.gameYear}</p>:""}
        {game.category?<p>Catégorie : {game.category}</p>:""}
        <button onClick={()=>dispatch({type: 'REMOVE_GAME', game:game})}>Delete this Game !</button>
    </div>
    )
};

