import getPoints from '../accessors/getPoints.js'

function checkIfTie() {
    const points = getPoints()

    if (!points.includes(0)) {
        return true
    } else {
        return false
    }
}

export default checkIfTie
