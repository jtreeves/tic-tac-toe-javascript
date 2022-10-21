import { findEmptyIndexInNearlyFullCombo } from './findEmptyIndexInNearlyFullCombo.js'
import { selectWinBlockOrRandom } from './selectWinBlockOrRandom.js'

export function selectBestCell(player) {
    const xEmpty = findEmptyIndexInNearlyFullCombo('X')
    const oEmpty = findEmptyIndexInNearlyFullCombo('O')

    if (player === 'X') {
        return selectWinBlockOrRandom(xEmpty, oEmpty)
    } else {
        return selectWinBlockOrRandom(oEmpty, xEmpty)
    }
}
