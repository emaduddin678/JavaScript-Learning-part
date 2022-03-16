var trr = [1,2,3,4,5,6]
/*
var sum = arr.reduce(function(prev, curr){
    return prev + curr
}, 100)

console.log(
    arr.reduce(function(prev, curr){
        return prev + curr
    })
)

console.log(sum)

var max = arr.reduce(function(prev,curr){
    return Math.max(prev, curr)
})

console.log(max)
*/

function myReduce(arr, cb, acc){

    for(let i = 0; i < arr.length; i++){
        acc = cb(acc, arr[i])
    }
    return acc
}

function cbs(prev, curr){
    return prev + curr
}

var sum = myReduce(trr, cbs, trr[0])
console.log(sum)

function max(prev, curr){
    return Math.max(prev, curr)
}
console.log(myReduce(trr, max, trr[0]))


function min(prev, curr){
    return Math.min(prev, curr)
}
console.log(myReduce(trr, min, trr[0]))