/*
// How to find string length
var name = 'Emad Uddin Emad'
console.log(name.length)

// Or 
var str 
str = name.length
console.log(str)
*/

// String length with condition 
var str = 'Some Text'
console.log(str.length)
console.log(str)

// console.log(str.charAt(0))
// console.log(str.charAt(2))

var length = 0

while(true){
    if(str.charAt(length) ==  '' ){
        break
    } else{
        length++
    }
}

console.log(length)





