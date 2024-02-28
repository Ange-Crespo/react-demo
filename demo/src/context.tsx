import React, { createContext, useReducer, Dispatch } from 'react';
import reducer from './store/reducers';


const initialState = {
  games: [
    {
      id: 1,
      gameName: "Les aventuriers du rail", 
      editorName: "Days of wonders", 
      gameYear: 2004 , 
      category: "Familiale"
    },
    {
      id: 2,
      gameName:  "7 wonders", 
      editorName: "Repos production", 
      gameYear: 2010 , 
      category: "Familiale" 
    },
  ]
}

const AppContext = createContext<{
  state: GameState;
  dispatch: Dispatch<GameAction>;
}>({
  state: initialState,
  dispatch: () => null
});


const AppProvider: React.FC<{children:any}> = ({ children }:any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext };