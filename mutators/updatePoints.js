import getPoints from '../accessors/getPoints.js'
import setPoints from '../storers/setPoints.js'

function updatePoints(index, point) {
    const points = getPoints()
    points[index] = point

    setPoints(points)
}

export default updatePoints
