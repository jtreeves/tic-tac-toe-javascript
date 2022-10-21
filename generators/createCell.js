import { getPoints } from '../accessors/getPoints.js'
import { getTurn } from '../accessors/getTurn.js'

export function createCell(position) {
    const article = document.createElement('article')
    const points = getPoints()
    const turn = getTurn()
    const id = 'square-' + position

    const handleClick = () => {
        points[position] = turn
        localStorage.setItem('points', points)
    }

    article.id = id
    article.addEventListener('click', handleClick)

    return article
}
