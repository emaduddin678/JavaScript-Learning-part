// Array start here 
/*
var arr = [1,2,3,4]

console.log(arr)

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

arr[30] = 6
console.log(arr)
console.log(arr[15])
// update 3rd index 
arr[2] = 555
console.log(arr)
var d = arr.length
console.log(d)
console.log(arr.length)

array with constructor

var arr2 = Array(1,2,3,4,5,6)
*/
var arr = [1,2,3,4]
var t = 0 

while (true){
    if (arr[t] == undefined){
        break
    }else{
        t++
    }
}
console.log(t)

var arr2 = Array()
console.log(arr2)

arr2 = Array(1,2,3,4)
console.log(arr2)