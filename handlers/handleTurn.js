import getTurn from '../accessors/getTurn.js'
import updateTurn from '../mutators/updateTurn.js'
import updateMessage from '../mutators/updateMessage.js'
import extractIndexFromId from '../utilities/extractIndexFromId.js'
import getPlayer from '../accessors/getPlayer.js'
import playOpponent from '../utilities/playOpponent.js'
import updateTie from '../mutators/updateTie.js'
import updateWinner from '../mutators/updateWinner.js'
import updatePoints from '../mutators/updatePoints.js'

function handleTurn(event) {
    const target = event.target
    const player = getPlayer()
    const turn = getTurn()

    if (target.textContent !== '' || player !== turn) {
        return
    } else {
        const id = target.id
        const index = extractIndexFromId(id)
        const text = turn === 1 ? 'X' : 'O'
        target.textContent = text
        updatePoints(index, turn)
        updateTie()
        updateWinner()
        updateTurn()
        updateMessage()
        setTimeout(() => {
            playOpponent()
        }, 1000)
    }
}

export default handleTurn
