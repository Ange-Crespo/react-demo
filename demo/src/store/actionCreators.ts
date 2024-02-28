import * as actionTypes from "./actionTypes"

export function addGame(game: IGame) {
  const action: GameAction = {
    type: actionTypes.ADD_GAME,
    game,
  }

  return simulateHttpRequest(action)
}

export function removeGame(game: IGame) {
  const action: GameAction = {
    type: actionTypes.REMOVE_GAME,
    game,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: GameAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}