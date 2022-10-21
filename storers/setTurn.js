import { setValue } from './setValue.js'

export function setTurn(newTurn) {
    const stringTurn = String(newTurn)
    
    setValue('turn', stringTurn)
}
