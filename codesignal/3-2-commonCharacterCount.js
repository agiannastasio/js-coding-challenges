// https://app.codesignal.com/arcade/intro/level-3/JKKuHJknZNj4YGL32
function solution(s1, s2) {
    const a = s1.split('')
    const b = s2.split('')
    let commonChars = ""
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            commonChars = commonChars + a[i]
            for (let z = 0; z < b.length; z++) {
                if (b[z] == a[i]) {
                    b.splice(z, 1)
                    break
                }
            }
        }
    }
    return commonChars.length
}
