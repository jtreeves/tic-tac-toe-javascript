import waitTurnMessage from '../data/waitTurnMessage.js'
import yourTurnMessage from '../data/yourTurnMessage.js'
import createPlayerReminder from '../generators/createPlayerReminder.js'
import createBoard from '../generators/createBoard.js'
import createResetButton from '../generators/createResetButton.js'
import getPlayer from '../accessors/getPlayer.js'
import playOpponent from '../utilities/playOpponent.js'

function updateScreenWithGame() {
    const body = document.querySelector('body')
    const p = document.querySelector('p')
    const div = document.querySelector('div')
    const reminder = createPlayerReminder()
    const board = createBoard()
    const resetButton = createResetButton()
    const player = getPlayer()
    const message = player === 1 ? yourTurnMessage : waitTurnMessage
    p.textContent = message

    p.remove()
    div.remove()

    body.appendChild(reminder)
    body.appendChild(p)
    body.appendChild(board)
    body.appendChild(resetButton)

    if (player === -1) {
        setTimeout(() => {
            playOpponent()
        }, 1000)
    }
}

export default updateScreenWithGame
