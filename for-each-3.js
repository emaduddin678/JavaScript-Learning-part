var arr = [ 1, 2, 3, 4, 5, 6]
// console.log(arr.length)
// arr.forEach(function(value,index,tharArray){
//     console.log(value,index,tharArray)
// })

var sum = 0;
function myforEach(arr){
    for(var i=0; i<arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}
// myforEach(arr)

let squareNumber = [];
arr.forEach(function(value){
    squareNumber.push(value*value)
    console.log(value)
})
console.log(squareNumber)