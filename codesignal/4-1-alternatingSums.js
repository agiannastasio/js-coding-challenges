// https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9
function solution(a) {
    let teamA = 0
    let teamB = 0
    for (let i = 0; i < a.length; i = i + 2) {
        teamA = teamA + a[i]
    }
    if (a.length > 1) {
        for (let i = 1; i < a.length; i = i + 2) {
            teamB = teamB + a[i]
        }
    }
    return [teamA, teamB]
}
