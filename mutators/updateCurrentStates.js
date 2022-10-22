import updatePoints from './updatePoints.js'
import updateTie from './updateTie.js'
import updateWinner from './updateWinner.js'
import updateTurn from './updateTurn.js'
import updateMessage from './updateMessage.js'

function updateCurrentStates(index, point) {
    updatePoints(index, point)
    updateTie()
    updateWinner()
    updateTurn()
    updateMessage()
}

export default updateCurrentStates
