// https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico
function solution(inputString) {
    let uneven = 0 // will check if most than 1 char is not even
    const counts = Object.create(null) // object for the character=>count mappings

    for (const ch of inputString) {
        const count = counts[ch] ?? 0
        counts[ch] = count + 1 // add one and store the result
    }
    
    for (const ch in counts) {
        if (counts[ch] % 2 != 0) {
            uneven++
            console.log(uneven)
        }
    }
    
    return uneven < 2
}
