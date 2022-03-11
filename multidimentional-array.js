// Multi dimensional Array

var arr = [
    [68, 78, 88, 58], 
    [66, 76, 86, 56],
    [62, 72, 82, 52]

]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

// Array traversing in 2 dimension
/*
console.log(arr[0] [0])
console.log(arr[1] [0])
console.log(arr[2] [0])
*/
// so we have to write all index to see each 

// That's why we use loop
for (let i = 0; i < arr.length; i++ ){
    for ( let j = 0; j < arr[i].length; j++ ){
        console.log( 'Element', i,':',  arr[i][j])
    }
}