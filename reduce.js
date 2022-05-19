let arr = [1,2,3,9,4,5,6,7,8]
let arrt = 7;
console.log(Array.isArray(arrt))
console.log(Array.isArray(arr))
let sum = arr.reduce(function(prev, current){
    return prev + current
},0)

// console.log(sum)

let max = arr.reduce(function(prev, current){
    return Math.max(prev, current)
}, 0)
// console.log(max)



function myReduce(array, callback, acc){

    for(let i = 0; i < array.length; i++){
        acc = callback(acc, array[i])
    }
    return acc;
}

function forsum(acc, current){
    return tottt = acc + current 
}

let sum2 = myReduce(arr, forsum, 0)
// console.log(sum2)

// const castArray = (value) => (Array.isArray(value) ? value : [value]);

