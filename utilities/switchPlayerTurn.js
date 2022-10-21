import { getTurn } from '../accessors/getTurn.js'

export function switchPlayerTurn(winner) {
    const turn = getTurn()

    if (!winner) {
        const newTurn = turn * -1
        
        localStorage.setItem('turn', newTurn)
    }
}
