/// <reference types="react-scripts" />

interface Game {
    id: number
    nomDuJeu: string
    editeur: string
    anneeDeSortie: number
    categorie: string  
}

interface Games {
    list: Game[]
}