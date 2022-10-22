import { findEmptyIndexInNearlyFullCombo } from './findEmptyIndexInNearlyFullCombo.js'
import { selectWinBlockOrRandom } from './selectWinBlockOrRandom.js'

export function selectBestCell(computer) {
    const xEmpty = findEmptyIndexInNearlyFullCombo('X')
    const oEmpty = findEmptyIndexInNearlyFullCombo('O')

    if (computer === 'X') {
        return selectWinBlockOrRandom(xEmpty, oEmpty)
    } else {
        return selectWinBlockOrRandom(oEmpty, xEmpty)
    }
}
