// https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP
function solution(a, b) {
    let diff = 0
    let ax = []
    let bx = []
    if (a == b) {
        return true
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                diff++
                ax.push(a[i])
                bx.push(b[i])
            }
        }
    }
    return diff == 0 || (diff == 2 && ax[0]==bx[1] && ax[1]==bx[0])
}
