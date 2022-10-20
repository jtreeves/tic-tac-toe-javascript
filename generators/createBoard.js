import { getPoints } from '../accessors/getPoints'
import { createCell } from './createCell'

export function createBoard() {
    const section = document.createElement('section')
    const points = getPoints()
    
    points.forEach(point => {
        const id = 'square-' + points.indexOf(point)
        const cell = createCell(id)
        section.appendChild(cell)
    })

    return section
}
