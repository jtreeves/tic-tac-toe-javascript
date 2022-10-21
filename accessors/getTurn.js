import { getValue } from './getValue.js'

export function getTurn() {
    const singleString = getValue('turn')
    const singleNumber = Number(singleString)

    return singleNumber
}
