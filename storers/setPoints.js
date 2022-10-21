import { setValue } from './setValue.js'

export function setPoints(newPoints) {
    const stringPoints = newPoints.join(',')
    
    setValue('points', stringPoints)
}