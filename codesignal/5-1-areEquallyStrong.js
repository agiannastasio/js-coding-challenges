// https://app.codesignal.com/arcade/intro/level-5/g6dc9KJyxmFjB98dL
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    let yourStronger, yourWeaker, friendsStronger, friendsWeaker
    if (yourLeft >= yourRight) {
        yourStronger = yourLeft
        yourWeaker = yourRight
    } else {
        yourStronger = yourRight
        yourWeaker = yourLeft
    }
    if (friendsRight >= friendsLeft) {
        friendsStronger = friendsRight
        friendsWeaker = friendsLeft
    } else {
        friendsStronger = friendsLeft
        friendsWeaker = friendsRight
    }
    return (yourStronger == friendsStronger && yourWeaker == friendsWeaker)
}
