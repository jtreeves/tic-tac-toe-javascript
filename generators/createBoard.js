import getPoints from '../accessors/getPoints.js'
import createCell from './createCell.js'

function createBoard() {
    const section = document.createElement('section')
    const points = getPoints()

    points.forEach((_, index) => {
        const id = 'square-' + index
        const cell = createCell(id)

        section.appendChild(cell)
    })

    return section
}

export default createBoard
