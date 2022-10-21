import { createScreen } from './generators/createScreen.js'
import { checkIfTie } from './utilities/checkIfTie.js'
import { checkIfWinner } from './utilities/checkIfWinner.js'
import { switchPlayerTurn } from './utilities/switchPlayerTurn.js'
import { updateBoard } from './utilities/updateBoard.js'
import { updateMessage } from './utilities/updateMessage.js'

export function app() {
    const points = Array(9).fill(0)
    const turn = -1
    let winner = false
    let tie = false

    localStorage.setItem('points', points)
    localStorage.setItem('turn', turn)

    createScreen()

    tie = checkIfTie()
    winner = checkIfWinner()
    switchPlayerTurn(winner)
    updateBoard()
    updateMessage(tie, winner)
}
