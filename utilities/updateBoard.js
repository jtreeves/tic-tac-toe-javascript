import { getPoints } from '../accessors/getPoints.js'

export function updateBoard() {
    const points = getPoints()
    const squares = document.querySelectorAll('article')

    for (let index in points) {
        if (points[index] === 1) squares[index].innerText = 'X'
        if (points[index] === -1) squares[index].innerText = 'O'
        if (!points[index]) squares[index].innerText = ''
    }
}
