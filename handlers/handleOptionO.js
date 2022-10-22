import setPlayer from '../storers/setPlayer.js'
import updateScreenWithGame from '../mutators/updateScreenWithGame.js'

function handleOptionO() {
    setPlayer(-1)
    updateScreenWithGame()
}

export default handleOptionO
