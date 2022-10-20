export function cell() {
    const article = document.createElement('article')
    article.addEventListener('click', () => {
        article.innerText = 'X'
    })
    return article
}
