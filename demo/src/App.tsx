import React, { useContext } from 'react';
import logo from './logo.svg';
//import { useSelector, shallowEqual, useDispatch } from "react-redux"
//import { Dispatch } from 'redux';
import './App.css';
import { GameComponent, NameEditComponent, EditorEditComponent, YearEditComponent, CategoryEditComponent, GameForm } from './components';
import { WelcomeComponent } from './components/welcome';
import { LogoComponent } from './components/Logo';
import { GameList } from './components/gameList';
import { addGame, removeGame } from './store/actionCreators';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppContext } from './context';


function App() {

  const [name, setName] = React.useState("Les aventuriers du rail");

  const setGamenameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const [editor, setEditor] = React.useState("Days of wonders");

  const setEditornameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditor(event.target.value);
  }

  const [year, setYear] = React.useState(2004);

  const setYearState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(Number(event.target.value));
  }

  const [category, setCategory] = React.useState("Familiale");

  const setCategoryState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  }

  // const games: readonly IGame[] = useContext(
  //   (state: GameState) => state.games,
  // )

  const { state , dispatch } = useContext(AppContext);

  // const dispatch: Dispatch<any> = useDispatch()

/*   const saveGame = React.useCallback(
    (game: IGame) => dispatch(addGame(game)),
    [dispatch]
  )
   */

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          LE CHOC DES TITANS ! 
        </h3>
        <a className="App-link" href="https://polyfaces.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Router>
        <nav>
          <ul>
            <li><Link to="/Start">0</Link></li>
            <li><Link to="/accueil">Accueil</Link></li>
            <li><Link to="/liste">Liste des jeux</Link></li>
            <li><Link to="/ajout">Ajouter un jeu</Link></li>
          </ul>
        </nav>
         
        <Routes>
          <Route path="/Start" 
          element={<WelcomeComponent message="Salut bandes de tarés ! C'est Bioman l'après-midi" number_of_turn={0}/>}>
          </Route>
          <Route path="/accueil" element={
          <div><LogoComponent x={30} y={200} src="https://upload.wikimedia.org/wikipedia/fr/8/82/Logo_ALTEN.jpg"  height='40vmin'/>
          <LogoComponent x={700} y={400} src="data:image/png;base64,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"/>
          </div>}>
          </Route>
          <Route path="/liste" element={state.games.map((game: IGame) => (
                  <GameComponent key={game.id} game={game} removeGame={removeGame} />
          ))}></Route>
          <Route path="/ajout" element={<GameForm/>}></Route>
        </Routes>
      </Router>

      
      

      {/* <NameEditComponent gameName={name} onChange={setGamenameState} />
      <EditorEditComponent editorName={editor} onChange={setEditornameState} />
      <YearEditComponent gameYear={year} onChange={setYearState} />
      <CategoryEditComponent category={category} onChange={setCategoryState} /> */}

    {/* <GameList/> */}

    </div>
  
  );
}

export default App;
