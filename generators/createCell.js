import { handleTurn } from '../handlers/handleTurn.js'

export function createCell(id) {
    const article = document.createElement('article')

    article.id = id
    article.addEventListener('click', handleTurn)

    return article
}
