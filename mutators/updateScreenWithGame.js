import { getPlayer } from '../accessors/getPlayer.js'
import { createBoard } from '../generators/createBoard.js'
import { createResetButton } from '../generators/createResetButton.js'

export function updateScreenWithGame() {
    const body = document.querySelector('body')
    const p = document.querySelector('p')
    const article = document.querySelector('article')
    const board = createBoard()
    const resetButton = createResetButton()
    const player = getPlayer()
    const message = player === 1 ? 'Your turn!' : 'Wait your turn...'

    p.textContent = message
    article.remove()
    body.appendChild(board)
    body.appendChild(resetButton)
}
