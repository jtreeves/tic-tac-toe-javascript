import { getPoints } from '../accessors/getPoints.js'
import { winningCombos } from '../data/winningCombos.js'

export function checkIfWinner() {
    const points = getPoints()
    const winner =  winningCombos.some(combo => {
        return Math.abs(points[combo[0]] + points[combo[1]] + points[combo[2]]) === 3 
    })

    return winner
}
