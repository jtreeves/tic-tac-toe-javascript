import { getPoints } from '../accessors/getPoints.js'
import { createCell } from './createCell.js'

export function createBoard() {
    const section = document.createElement('section')
    const points = getPoints()

    points.forEach((_, index) => {
        const id = 'square-' + index
        const cell = createCell(id)

        section.appendChild(cell)
    })

    return section
}
