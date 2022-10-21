export function selectRandomEmptyCell() {
    const cells = document.querySelectorAll('article')
    const emptyCells = []
    
    cells.forEach(cell => {
        if (cell.textContent === '') {
            emptyCells.push(cell)
        }
    })

    const amount = emptyCells.length
    const randomIndex = Math.floor(Math.random() * amount)
    const randomCell = emptyCells[randomIndex]

    return randomCell
}
