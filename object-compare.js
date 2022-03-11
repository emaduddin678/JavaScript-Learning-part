var obj = {
    a: 10,
    b: 20
}
var obj2 = {
    a: 10,
    b: 20
}
// console.log(obj === obj2)


// if (obj.a === obj2.a && obj.b === obj2.b){
//     console.log('Both Object are equal')
// } else {
//     console.log('Not equal')
// }

console.log(obj)
console.log(JSON.stringify(obj))

console.log(obj2)
console.log(JSON.stringify(obj2))

if (JSON.stringify(obj) === JSON.stringify(obj2)){
    console.log('Both object are equal')
} else {
    console.log('These object are not equal')
}

// Also we can store JSON value in a variable

var variable1= JSON.stringify(obj)
var variable2= JSON.stringify(obj2)
if (variable1 === variable2){
    console.log('True')
} else {
    console.log('False')
}