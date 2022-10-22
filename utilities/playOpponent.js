import getPlayer from '../accessors/getPlayer.js'
import getWinner from '../accessors/getWinner.js'
import getTie from '../accessors/getTie.js'
import updateCurrentStates from '../mutators/updateCurrentStates.js'
import extractIndexFromId from './extractIndexFromId.js'
import selectBestCell from './selectBestCell.js'

function playOpponent() {
    const winner = getWinner()
    const tie = getTie()
    const player = getPlayer()

    if (winner || tie) {
        return
    } else {
        const opponent = player * -1
        const computer = opponent === 1 ? 'X' : 'O'
        const cell = selectBestCell(computer)
        const id = cell.id
        const index = extractIndexFromId(id)
        cell.textContent = computer
        updateCurrentStates(index, opponent)
    }
}

export default playOpponent
