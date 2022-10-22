import getPlayer from '../accessors/getPlayer.js'

function createPlayerReminder() {
    const player = getPlayer()
    const h2 = document.createElement('h2')
    const text = player === 1 ? 'X' : 'O'
    const reminder = `You are playing ${text}`
    h2.textContent = reminder

    return h2
}

export default createPlayerReminder
