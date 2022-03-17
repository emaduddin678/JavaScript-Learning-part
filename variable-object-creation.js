// when we declare and assign a value like this-
// var b = 20
// it actually do like this -
// first 
// var b (Creational phase)
// second 
// b = 20
// and overall the first part( var b ) is Creational phase, which is undefined
// After all the creational phase, Exicutioanal phase start, where initialized any value  
// like that b = 20 the second part 

var a = 10
var b

console.log(a)
console.log(b)

b = 20
console.log(c)
var c = 25

// Creationa phase
// a = undefined
// b = undefined
// c = undefined

// Executional phase
// a = 10
// b = 20
// c = 25