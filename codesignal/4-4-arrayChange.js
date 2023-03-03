// https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg
function solution(inputArray) {
    let moves = 0
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] >= inputArray[i+1]) {
            do {
                moves++
                let value = inputArray[i+1]
                inputArray[i+1] = value + 1
            } while (inputArray[i] + 1 != inputArray[i+1])
        }
    }
    return moves
}
