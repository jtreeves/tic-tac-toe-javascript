import { getPoints } from '../accessors/getPoints.js'

export function checkIfTie() {
    const points = getPoints()

    if (!points.includes(0)) return true
}
