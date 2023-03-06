// https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ
function solution(n) {
    let number = n.toString().split('')
    let half = number.length / 2
    let sumFirst = 0
    let sumLast = 0
    for (let i = 0; i < half; i++) {
        sumFirst = sumFirst + Number(number[i])
    }
    for (let z = half; z < number.length; z++) {
        sumLast = sumLast + Number(number[z])
    }
    return sumFirst == sumLast
}
