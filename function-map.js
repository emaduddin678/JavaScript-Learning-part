/*
var arr = [1,2,3,4,5]

var sqrArr = arr.map(callBackFunc)

function callBackFunc(value){
    // return Math.random() * 100
    var b =  value * value
    return b
}


// console.log(arr)
// console.log(sqrArr)

function myMap(arr, cb){
    var newArr = []
    for(let i = 0; i< arr.length; i++){
        
        var temp = cb(arr[i])
        newArr.push(temp)
    }
    return newArr
}

function addNum(value){
    return value + 100
}

function mlNum(value){
    return value * 100
}
// console.log(myMap(arr))
console.log(myMap(arr, addNum))
console.log(myMap(arr, mlNum))
*/


var trr = [1,2,3,4,5]

function myMap(arr, cb){
    var tempArr = []
    for(let i = 0; i < arr.length; i++){
        var temp = cb(arr[i])                      //arr[i] +100
        tempArr.push(temp)
    }
    return tempArr
}
function addNUmCb(value){
    return value + 500
}

function mlNumCb(value){
    // console.log(value*5)
    return value*5
}


console.log(myMap(trr,addNUmCb))
console.log(myMap(trr,mlNumCb))