// https://app.codesignal.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5
function solution(inputArray) {
    inputArray.sort((a, b) => {
        return a - b
    })
    let jump = 1
    let i = 0
    do {
        if (inputArray[i] % jump == 0) {
            jump++
            i = 0
        } else {
            i++
        }
    } while (i < inputArray.length)
    return jump
}
