import findEmptyIndexInNearlyFullCombo from './findEmptyIndexInNearlyFullCombo.js'
import findCellByIndex from './findCellByIndex.js'
import selectRandomEmptyCell from './selectRandomEmptyCell.js'

function selectBestCell(opponent) {
    const xEmpty = findEmptyIndexInNearlyFullCombo('X')
    const oEmpty = findEmptyIndexInNearlyFullCombo('O')

    let winningIndex = 0
    let blockingIndex = 0

    if (opponent === 1) {
        winningIndex = xEmpty
        blockingIndex = oEmpty
    } else {
        winningIndex = oEmpty
        blockingIndex = xEmpty
    }

    if (winningIndex !== -1) {
        return findCellByIndex(winningIndex)
    } else if (blockingIndex !== -1) {
        return findCellByIndex(blockingIndex)
    } else {
        return selectRandomEmptyCell()
    }
}

export default selectBestCell
