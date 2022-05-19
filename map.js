let number = [1,2,3,4,5,6,7,8,9,10];
let squareNumber = number.map(function(value){
    return value*value;
})
// console.log(squareNumber)

let newNumber = number.filter(function(value){
    return value<5
})
console.log(newNumber)
number.forEach(function(value){
    // console.log(value)
})
