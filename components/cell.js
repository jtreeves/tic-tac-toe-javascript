export function cell() {
    const article = document.createElement('article')
    article.addEventListener('click', () => {
        // const main = document.querySelector('section')
        // const text = main.ariaValueText
        // const array = text.split(',')
        // console.log(array)
        // array[0] = '2'
        // main.ariaValueText = array.join(',')
        // console.log(main.ariaValueText)

        const currentBoard = localStorage.getItem('board')
        console.log(currentBoard)
        console.log(typeof currentBoard)
        // const med = JSON.parse(currentBoard)
        // console.log(med)
        const array = currentBoard.split(',')
        console.log(array)
        console.log(typeof array)
        const arrayOfNumbers = []
        array.forEach(el => {
            arrayOfNumbers.push(Number(el))
        })
        console.log(arrayOfNumbers)
        arrayOfNumbers[0] = 1
        console.log(arrayOfNumbers)
        // const tempBoard = [...currentBoard]
        // console.log(tempBoard)
        // tempBoard[2] = -1
        // console.log(tempBoard)
        localStorage.setItem('board', arrayOfNumbers)
        const updatedBoard = localStorage.getItem('board')
        console.log(updatedBoard)
    })
    return article
}
