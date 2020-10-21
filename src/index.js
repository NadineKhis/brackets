module.exports = function check(str, bracketsConfig) {
    let opening = bracketsConfig.map(pair => pair[0])
    let closing = bracketsConfig.map(pair => pair[1])
    let stack = []
    for (let char of str) {
        if (opening.includes(char) && (!closing.includes(char))) {
            stack.push(char)
            console.log(`pushed ${char}, stack is ${stack}`)
        }

        else if (opening.includes(char) && closing.includes(char)) {
            if (stack.length === 0 || stack[stack.length - 1] !== char){
                stack.push(char)
                console.log(`pushed ${char}, stack is ${stack}`)
                continue
            }
            let top = stack.pop()
            console.log(`popped ${top}, char is ${char}`)
            if (!(closing.indexOf(char) === opening.indexOf(top))){
                console.log(`${char} !== ${top}`)
                return false
            }
        }

        else {
            if (stack.length === 0)
                return false
            top = stack.pop()
            console.log(`popped ${top}, char is ${char}`)
            if (!(closing.indexOf(char) === opening.indexOf(top))) {
                console.log(`${char} !== ${top}`)
                return false
            }
        }
    }

    return stack.length === 0

}
