export function getValue(key) {
    const storedValue = localStorage.getItem(key)

    return storedValue
}
