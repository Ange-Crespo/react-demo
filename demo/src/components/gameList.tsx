import * as React from "react";
import {GameItem} from './gameItem';
//import axiosInstance from '../http-common';


export const GameList = () => {
    const [games, setGames] = React.useState<IGame[]>([]);
/*     React.useEffect(() => {
      axiosInstance.get<IGame[]>('/jeux')
          .then(response => {
              setGames(response.data);
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          })
          .then(() => {
              console.log(games)
          });

      }, []); */
          return (
        <div>
            {games.map((game: IGame) =>(
                <GameItem game={game} />
            ))}
        </div>
      )
}