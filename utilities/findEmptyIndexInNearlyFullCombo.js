import winningCombos from '../data/winningCombos.js'
import getPoints from '../accessors/getPoints.js'

function findEmptyIndexInNearlyFullCombo(side) {
    const points = getPoints()
    const multiplier = side === 'X' ? 1 : -1
    let foundIndex = -1

    winningCombos.forEach(combo => {
        if (points[combo[0]] + points[combo[1]] + points[combo[2]] === multiplier * 2) {
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

export default findEmptyIndexInNearlyFullCombo
