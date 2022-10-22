import setValue from './setValue.js'

function setPoints(newPoints) {
    const stringPoints = newPoints.join(',')

    setValue('points', stringPoints)
}

export default setPoints
