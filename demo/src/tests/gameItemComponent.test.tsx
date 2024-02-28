import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";


import { GameItem } from "../components/gameItem";


function renderGameItem() {

    const game: IGame = {
        id: 1,
        gameName: "Les aventuriers du rail", 
        editorName: "Days of wonders", 
        gameYear: 2004 , 
        category: "Familiale"
    };
  
    return render(<GameItem game={game} />);

  }

describe("<GameItem /> test", () => {

  test("should display a game", async () => {
    const  gameItem = renderGameItem();
    
    expect(await screen.findAllByText('Nom du jeu: Les aventuriers du rail'));
  
  });

});