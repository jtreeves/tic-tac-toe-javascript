import findEmptyIndexInNearlyFullCombo from './findEmptyIndexInNearlyFullCombo.js'
import findCellByIndex from './findCellByIndex.js'
import selectRandomEmptyCell from './selectRandomEmptyCell.js'

function selectBestCell(opponent) {
    const xEmpty = findEmptyIndexInNearlyFullCombo('X')
    const oEmpty = findEmptyIndexInNearlyFullCombo('O')

    let firstSide = 0
    let secondSide = 0

    if (opponent === 1) {
        firstSide = xEmpty
        secondSide = oEmpty
    } else {
        firstSide = oEmpty
        secondSide = xEmpty
    }

    if (firstSide !== -1) {
        return findCellByIndex(firstSide)
    } else if (secondSide !== -1) {
        return findCellByIndex(secondSide)
    } else {
        return selectRandomEmptyCell()
    }
}

export default selectBestCell
