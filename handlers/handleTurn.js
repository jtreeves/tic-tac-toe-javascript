import getTurn from '../accessors/getTurn.js'
import getPlayer from '../accessors/getPlayer.js'
import updateCurrentStates from '../mutators/updateCurrentStates.js'
import extractIndexFromId from '../utilities/extractIndexFromId.js'
import playOpponent from '../utilities/playOpponent.js'

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
        updateCurrentStates(index, turn)
        setTimeout(() => {
            playOpponent()
        }, 1000)
    }
}

export default handleTurn
