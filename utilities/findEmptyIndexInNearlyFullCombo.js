import { getPoints } from '../accessors/getPoints.js'
import { winningCombos } from '../data/winningCombos.js'

export function findEmptyIndexInNearlyFullCombo(computer) {
    const points = getPoints()
    const multiple = computer === 'X' ? 1 : -1
    let foundIndex = -1

    winningCombos.forEach(combo => {
        if (points[combo[0]] + points[combo[1]] + points[combo[2]] === multiple * 2) {
            if (points[combo[0]] === 0) {
                foundIndex = combo[0]
            } else if (points[combo[1]] === 0) {
                foundIndex = combo[1]
            } else {
                foundIndex = combo[2]
            }
        }
    })

    return foundIndex
}
