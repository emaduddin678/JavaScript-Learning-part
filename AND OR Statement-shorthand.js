/*
// How to find string length
var name = 'Emad Uddin Emad'
console.log(name.length)

// Or 
var str 
str = name.length
console.log(str)
*/
/*
var name = 'Yaseen Arafat'

var fullname = ''
if (name.length === 0){
    fullname = "Emad Uddin"
} else{
    fullname = name
}
console.log(fullname)
*/
// Now solve this problem with shorthand

var name = 'Yaseen Arafat'

var fullname = name || 'Emad Uddin'
console.log(fullname)

// var isOk = false
// if (isOk){
//     console.log('Everything is Ok')
// } else{
//     console.log('NOt Ok')
// }
var isOk = false

isOk && console.log('Everything is Ok')