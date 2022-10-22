import setValue from './setValue.js'

function setPlayer(choice) {
    const stringPlayer = String(choice)
    
    setValue('player', stringPlayer)
}

export default setPlayer
