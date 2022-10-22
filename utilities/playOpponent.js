import getPlayer from '../accessors/getPlayer.js'
import selectBestCell from './selectBestCell.js'
import getPoints from '../accessors/getPoints.js'
import setPoints from '../storers/setPoints.js'
import updateTurn from '../mutators/updateTurn.js'
import updateMessage from '../mutators/updateMessage.js'
import extractIndexFromId from './extractIndexFromId.js'
import updateTie from '../mutators/updateTie.js'
import updateWinner from '../mutators/updateWinner.js'

function playOpponent() {
    const player = getPlayer()
    const opponent = player * -1
    const computer = opponent === 1 ? 'X' : 'O'
    const cell = selectBestCell(computer)
    cell.textContent = computer
    const id = cell.id
    const index = extractIndexFromId(id)
    const points = getPoints()
    points[index] = opponent
    setPoints(points)
    updateTie()
    updateWinner()
    updateTurn()
    updateMessage()
}

export default playOpponent
