import { createScreen } from './generators/createScreen.js'
import { setInitialStates } from './storers/setInitialStates.js'

export function app() {
    createScreen()
    setInitialStates()
}
