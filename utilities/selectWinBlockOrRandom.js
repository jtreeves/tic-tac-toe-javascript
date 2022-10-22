import { findCellByIndex } from './findCellByIndex.js'
import { selectRandomEmptyCell } from './selectRandomEmptyCell.js'

export function selectWinBlockOrRandom(main, opponent) {
    if (main !== -1) {
        return findCellByIndex(main)
    } else if (opponent !== -1) {
        return findCellByIndex(opponent)
    } else {
        return selectRandomEmptyCell()
    }
}
