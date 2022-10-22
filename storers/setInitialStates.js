import setPoints from './setPoints.js'
import setTurn from './setTurn.js'

function setInitialStates() {
    const points = Array(9).fill(0)
    const turn = 1

    setPoints(points)
    setTurn(turn)
}

export default setInitialStates
