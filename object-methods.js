var obj = {
    x: 30,
    y: 40,
    z: 50
}

console.log(Object.keys(obj))
console.log(Object.values(obj))

console.log(Object.keys(obj), Object.values(obj))
console.log(Object.entries(obj))

// console.log(obj)
// var obj2 = obj
// console.log(obj2)
// obj2.x = 555
// console.log(obj2)
console.log(obj)
var obj2 =Object.assign( {}, obj)
console.log(obj2)
obj2.x = 555
console.log(obj2)