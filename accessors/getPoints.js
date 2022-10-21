import { getValue } from './getValue.js'

export function getPoints() {
    const singleString = getValue('points')
    const arrayOfStrings = singleString.split(',')
    const arrayOfNumbers = arrayOfStrings.map(item => {
        return Number(item)
    })

    return arrayOfNumbers
}
