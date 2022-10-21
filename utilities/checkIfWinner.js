import { getPoints } from '../accessors/getPoints.js'

export function checkIfWinner() {
    const points = getPoints()
    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    const winner =  winningCombos.some(combo => Math.abs(points[combo[0]] + points[combo[1]] + points[combo[2]]) === 3 )

    return winner
}
