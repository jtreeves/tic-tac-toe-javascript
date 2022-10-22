import getPoints from '../accessors/getPoints.js'
import winningCombos from '../data/winningCombos.js'
import setWinner from '../storers/setWinner.js'

function updateWinner() {
    const points = getPoints()
    const winner = winningCombos.some(combo => {
        return Math.abs(points[combo[0]] + points[combo[1]] + points[combo[2]]) === 3 
    })

    setWinner(winner)
}

export default updateWinner
