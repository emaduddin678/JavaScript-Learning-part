var arr = [1,2,3,4,5,6]
var sum = 0
// arr.forEach(function(value, index, arr){
//     // console.log(value, index, arr)
//     sum += value
// })

// console.log(sum)

function myForEach(arrThatYouWantToPush, cb){
    for(var i = 0; i< arrThatYouWantToPush.length; i++){
        // console.log(arrThatYouWantToPush[i])
        // sum += arrThatYouWantToPush[i]
        // return sum
        cb(arrThatYouWantToPush[i], i, arr)
    }
    // console.log(sum)
}
function cbi(value, index, arr){
    sum += value
    console.log(value, index, arr)
}
function cbi2(value, index, arr){
    arr[index] = value + 5;
    console.log(arr[index])
}

myForEach(arr,cbi)
myForEach(arr,cbi2)

console.log(sum)

