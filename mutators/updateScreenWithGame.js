import { getPlayer } from '../accessors/getPlayer.js'
import { waitTurnMessage } from '../data/waitTurnMessage.js'
import { yourTurnMessage } from '../data/yourTurnMessage.js'
import { createBoard } from '../generators/createBoard.js'
import { createResetButton } from '../generators/createResetButton.js'
import { playOpponent } from '../utilities/playOpponent.js'

export function updateScreenWithGame() {
    const body = document.querySelector('body')
    const p = document.querySelector('p')
    const article = document.querySelector('article')
    const board = createBoard()
    const resetButton = createResetButton()
    const player = getPlayer()
    const message = player === 1 ? yourTurnMessage : waitTurnMessage

    p.textContent = message
    article.remove()
    body.appendChild(board)
    body.appendChild(resetButton)

    if (player === -1) {
        setTimeout(() => {
            playOpponent()
        }, 1000)
    }
}
