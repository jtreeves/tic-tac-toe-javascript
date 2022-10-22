import { getTurn } from '../accessors/getTurn.js'
import { getPlayer } from '../accessors/getPlayer.js'
import { yourTurnMessage } from '../data/yourTurnMessage.js'
import { waitTurnMessage } from '../data/waitTurnMessage.js'

export function updateMessage(winner, tie) {
    const turn = getTurn()
    const player = getPlayer()
    const turnIsPlayer = turn === player
    const message = document.querySelector('p')

    if (winner) {
        message.textContent = turnIsPlayer ? 'You win!' : 'You lose!'
    } else if (tie) {
        message.textContent = 'Tie game!'
    } else {
        if (turnIsPlayer) {
            message.textContent = yourTurnMessage
        } else {
            message.textContent = waitTurnMessage
        }
    }
}
