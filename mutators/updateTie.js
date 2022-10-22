import getPoints from '../accessors/getPoints.js'
import setTie from '../storers/setTie.js'

function updateTie() {
    const points = getPoints()
    const anyZeroes = points.includes(0)
    const tie = !anyZeroes

    setTie(tie)
}

export default updateTie
