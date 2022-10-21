import { setValue } from './setValue.js'

export function setPlayer(choice) {
    const stringPlayer = String(choice)
    
    setValue('player', stringPlayer)
}
