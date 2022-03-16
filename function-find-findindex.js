var arr = [ 1,23,2,98,3,32,4,89,5,90]

/*
function cb(value){
    return value === 89
}
var result =arr.find(cb)
console.log(result)

var indexResult = arr.findIndex(function(value){
    return value === 89
})
console.log(indexResult)

// here we can find value and index of value
*/

function myFind(playtttttttt, cdMeansCallBack){
    
    for (let i = 0; i < playtttttttt.length; i++){
        if(cdMeansCallBack(playtttttttt[i])){
            // return playtttttttt[i]
            return i
        }
    }
    

}
function cb(value){
    return value === 98
}

console.log(myFind(arr, cb))

