import { getValue } from './getValue.js'

export function getPlayer() {
    const singleString = getValue('player')
    const singleNumber = Number(singleString)

    return singleNumber
}
