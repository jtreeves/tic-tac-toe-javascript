function extractIndexFromId(id) {
    const lastCharacter = id.slice(-1)
    const index = Number(lastCharacter)

    return index
}

export default extractIndexFromId
