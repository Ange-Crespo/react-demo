interface IGame {
    id: number
    gameName : string;
    editorName : string;
    gameYear: number;
    category: string;
  }
  
  type GameState = {
    games: IGame[]
  }
  
  type GameAction = {
    type: string
    game: IGame
  }
  
  type DispatchType = (args: GameAction) => GameAction