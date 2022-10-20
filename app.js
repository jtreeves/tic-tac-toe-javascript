import { board } from './components/board.js'
import { header } from './components/header.js'
import { message } from './components/message.js'
import { reset } from './components/reset.js'
import { checkIfTie } from './utilities/checkIfTie.js'
import { checkIfWinner } from './utilities/checkIfWinner.js'
import { switchPlayerTurn } from './utilities/switchPlayerTurn.js'
import { updateBoard } from './utilities/updateBoard.js'
import { updateMessage } from './utilities/updateMessage.js'

export function app() {
    let currentBoard = Array(9).fill(0)
    let turn = -1
    let winner = false
    let tie = false

    localStorage.setItem('board', currentBoard)
    localStorage.setItem('turn', turn)

    const body = document.querySelector('body')
    const h1 = header()
    const p = message()
    const section = board(currentBoard)
    const button = reset()

    body.appendChild(h1)
    body.appendChild(p)
    body.appendChild(section)
    body.appendChild(button)

    tie = checkIfTie(currentBoard)
    winner = checkIfWinner(currentBoard)
    turn = switchPlayerTurn(turn, winner)
    updateBoard(currentBoard)
    updateMessage(turn, tie, winner)
}
