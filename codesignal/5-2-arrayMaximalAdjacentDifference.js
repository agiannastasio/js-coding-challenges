// https://app.codesignal.com/arcade/intro/level-5/EEJxjQ7oo7C5wAGjE
function solution(inputArray) {
    maxDiff = 0
    for (let i = 0; i < inputArray.length - 1; i++) {
        let current = inputArray[i]
        let next = inputArray[i+1]
        if (current > next) {
            if (current - next > maxDiff) maxDiff = current - next
        } else {
            if (next - current > maxDiff) maxDiff = next - current
        }
    }
    return maxDiff
}
