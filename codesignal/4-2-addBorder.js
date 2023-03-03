//https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN
function solution(picture) {
    let borderLine = "**"
    for (let i = 0; i < picture[0].length; i++) {
        borderLine = borderLine + "*"
    }
    for (let i = 0; i < picture.length; i++) {
        let currentText = picture[i]
        picture[i] = "*" + currentText + "*"
    }
    picture.unshift(borderLine)
    picture.push(borderLine)
    return picture
}
