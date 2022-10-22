import { setPlayer } from '../storers/setPlayer.js'
import { updateScreenWithGame } from '../mutators/updateScreenWithGame.js'

export function handleOptionX() {
    setPlayer(1)
    updateScreenWithGame()
}
