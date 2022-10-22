import setPoints from './setPoints.js'
import setTurn from './setTurn.js'
import setTie from './setTie.js'
import setWinner from './setWinner.js'

function setInitialStates() {
    const points = Array(9).fill(0)
    const turn = 1
    const tie = false
    const winner = false

    setPoints(points)
    setTurn(turn)
    setTie(tie)
    setWinner(winner)
}

export default setInitialStates
