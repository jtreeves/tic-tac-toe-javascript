import setValue from './setValue.js'

function setWinner(winner) {
    const stringWinner = String(winner)
    
    setValue('winner', stringWinner)
}

export default setWinner
