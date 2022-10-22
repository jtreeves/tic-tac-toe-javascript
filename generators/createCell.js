import handleTurn from '../handlers/handleTurn.js'

function createCell(id) {
    const article = document.createElement('article')

    article.id = id
    article.addEventListener('click', handleTurn)

    return article
}

export default createCell
