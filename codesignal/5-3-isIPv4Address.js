// https://app.codesignal.com/arcade/intro/level-5/veW5xJednTy4qcjso
function solution(inputString) {
    let ip = inputString.split(".")
    // has less/more than 4 blocks
    if (ip.length != 4) return false
    for (let i = 0; i < ip.length; i++) {
        // contains an empty block ex .254.255.0
        if (ip[i] == "") return false 
        // starts with 0 but it's not just a 0
        if (ip[i].length > 1 && ip[i].toString().charAt(0) == "0") return false
        // greater than 255
        if (ip[i] > 255) return false
        // contains letters
        for (let z = 0; z < ip[i].length; z++) {
            if (!(ip[i].toString().charAt(z) >= '0') || !(ip[i].toString().charAt(z) <= '9')) return false
        }
    }
    return true
}
