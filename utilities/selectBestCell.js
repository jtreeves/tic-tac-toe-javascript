import findEmptyIndexInNearlyFullCombo from './findEmptyIndexInNearlyFullCombo.js'
import selectWinBlockOrRandomCell from './selectWinBlockOrRandomCell.js'

function selectBestCell(computer) {
    const xEmpty = findEmptyIndexInNearlyFullCombo('X')
    const oEmpty = findEmptyIndexInNearlyFullCombo('O')

    if (computer === 'X') {
        return selectWinBlockOrRandomCell(xEmpty, oEmpty)
    } else {
        return selectWinBlockOrRandomCell(oEmpty, xEmpty)
    }
}

export default selectBestCell
