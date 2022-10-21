import { findCellByIndex } from './findCellByIndex.js'
import { selectRandomEmptyCell } from './selectRandomEmptyCell.js'

export function selectWinBlockOrRandom(player, opponent) {
    if (player !== -1) {
        return findCellByIndex(player)
    } else if (opponent !== -1) {
        return findCellByIndex(opponent)
    } else {
        return selectRandomEmptyCell()
    }
}
