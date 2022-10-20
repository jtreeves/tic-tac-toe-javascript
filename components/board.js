import { cell } from './cell.js'

export function board() {
    const section = document.createElement('section')

    for (let i = 0; i < 9; i++) {
        const newCell = cell()
        section.appendChild(newCell)
    }

    return section
}
