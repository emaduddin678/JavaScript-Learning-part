/*
function greet(msg){
    function greetMe(name){
        return msg + ', ' + name + '!'
    }
    return greetMe
}
// console.log(greet('Hello'))

var msg = greet('Good Morning')
var msg2 = greet('Good Night')
var msg3 = greet('Hello')

console.log(msg('Emad'))
console.log(msg2('Emad'))
console.log(msg3('Emad'))
*/

function base(b){
    return function(n){
        var result = 1
        for(let i =0; i < b; i++){
            result *= n
        }
        return result
    }
}

var base5 = base(10)
console.log(base5(2))


