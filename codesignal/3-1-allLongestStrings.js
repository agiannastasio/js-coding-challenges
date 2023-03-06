// https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL
function solution(inputArray) {
    let longest = 0
    let outputArray = []
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longest) {
            longest = inputArray[i].length
        }
    }
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == longest) {
            outputArray.push(inputArray[i])
        }
    }
    return outputArray
}
