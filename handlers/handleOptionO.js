import { setPlayer } from '../storers/setPlayer.js'
import { updateScreenWithGame } from '../mutators/updateScreenWithGame.js'

export function handleOptionO() {
    setPlayer(-1)
    updateScreenWithGame()
}
