import { getPoints } from '../accessors/getPoints.js'
import { createCell } from './createCell.js'

export function createBoard() {
    const section = document.createElement('section')
    const points = getPoints()

    points.forEach(point => {
        const position = points.indexOf(point)
        const cell = createCell(position)
        section.appendChild(cell)
    })

    return section
}
