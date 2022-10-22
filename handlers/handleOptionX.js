import setPlayer from '../storers/setPlayer.js'
import updateScreenWithGame from '../mutators/updateScreenWithGame.js'

function handleOptionX() {
    setPlayer(1)
    updateScreenWithGame()
}

export default handleOptionX
