import { findEmptyIndex } from './findEmptyIndex.js'
import { selectWinBlockOrRandom } from './selectWinBlockOrRandom.js'

export function selectBestCell(player) {
    const xEmpty = findEmptyIndex('X')
    const oEmpty = findEmptyIndex('O')

    if (player === 'X') {
        return selectWinBlockOrRandom(xEmpty, oEmpty)
    } else {
        return selectWinBlockOrRandom(oEmpty, xEmpty)
    }
}
