import getPoints from '../accessors/getPoints.js'
import getTurn from '../accessors/getTurn.js'
import setPoints from '../storers/setPoints.js'
import updateTurn from '../mutators/updateTurn.js'
import updateMessage from '../mutators/updateMessage.js'
import extractIndexFromId from '../utilities/extractIndexFromId.js'
import getPlayer from '../accessors/getPlayer.js'
import playOpponent from '../utilities/playOpponent.js'
import updateTie from '../mutators/updateTie.js'
import updateWinner from '../mutators/updateWinner.js'
import getWinner from '../accessors/getWinner.js'
import getTie from '../accessors/getTie.js'

function handleTurn(event) {
    const target = event.target
    const player = getPlayer()
    const turn = getTurn()

    if (target.textContent !== '' || player !== turn) {
        return
    } else {
        const id = target.id
        const index = extractIndexFromId(id)
        const points = getPoints()
        const text = turn === 1 ? 'X' : 'O'
        target.textContent = text
        points[index] = turn
        setPoints(points)
        updateTie()
        updateWinner()
        updateTurn()
        updateMessage()
        const winner = getWinner()
        const tie = getTie()
        if (!winner && !tie) {
            setTimeout(() => {
                playOpponent()
            }, 1000)
        }
    }
}

export default handleTurn
