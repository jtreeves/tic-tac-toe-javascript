export function extractIndexFromId(id) {
    const lastString = id.slice(-1)
    const index = Number(lastString)

    return index
}
