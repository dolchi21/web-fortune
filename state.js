var state = {}

module.exports = {
    set(key, value) {
        state[key] = value
    },
    get(key) {
        if (key === undefined) return state
        return state[key]
    }
}