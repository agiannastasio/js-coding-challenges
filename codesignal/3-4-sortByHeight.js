// https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM
function solution(a) {
    let values = []
    let treesIndexes = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            values.push(a[i]) // getting people's value
        } else {
            treesIndexes.push(i) // getting trees indexes
        }
    }
    values.sort((a, b) => {
        return a - b // asc ordering
    })
    for (let z = 0; z < treesIndexes.length; z++) {
        values.splice(treesIndexes[z], 0, -1) // re adding trees
    }
    return values
}
