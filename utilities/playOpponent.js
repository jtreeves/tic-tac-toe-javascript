import getPlayer from '../accessors/getPlayer.js'
import getWinner from '../accessors/getWinner.js'
import getTie from '../accessors/getTie.js'
import updateCurrentStates from '../mutators/updateCurrentStates.js'
import selectBestCell from './selectBestCell.js'
import extractIndexFromId from './extractIndexFromId.js'

function playOpponent() {
    const winner = getWinner()
    const tie = getTie()
    const player = getPlayer()
    const opponent = player * -1

    if (winner || tie) {
        return
    } else {
        const cell = selectBestCell(opponent)
        const id = cell.id
        const index = extractIndexFromId(id)
        const text = opponent === 1 ? 'X' : 'O'
        cell.textContent = text
        updateCurrentStates(index, opponent)
    }
}

export default playOpponent
