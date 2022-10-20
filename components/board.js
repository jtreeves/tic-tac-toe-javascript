import { cell } from './cell.js'

export function board(currentBoard) {
    const section = document.createElement('section')
    section.ariaValueText = '1,0,1,-1,0,0,0,0,-1'

    for (let i = 0; i < 9; i++) {
        const newCell = cell()
        section.appendChild(newCell)
    }

    return section
}
