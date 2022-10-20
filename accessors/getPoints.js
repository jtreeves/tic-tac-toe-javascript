export function getPoints() {
    const singleString = localStorage.getItem('points')
    const arrayOfStrings = singleString.split(',')
    const arrayOfNumbers = arrayOfStrings.map(item => {
        return Number(item)
    })

    return arrayOfNumbers
}
