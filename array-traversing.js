// Traversing in Array
var arr = [2,5,8,1,0,9]

// arr[0]
// arr[1]
// arr[2]

// arr[arr.length-1]
// console.log(arr[arr.length-1])

// Adding extra 2 with this Array each Element

for(var i = 0; i < arr.length; i++){
    // console.log(arr[i])
    arr[i] += 2
    console.log(arr[i])

}

// Sum of this Array Element

console.log(arr)
var sum = 0
for( i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log(sum)

// Finding even Number of this Array
console.log('This is even')
for(i = 0; i < arr.length; i++ ){
    if(arr[i] % 2 === 0){
        console.log(arr[i])
    }
}
console.log('This is Odd')
for(i = 0; i < arr.length; i++ ){
    if(arr[i] % 2 === 1){
        console.log(arr[i])
    }
}
console.log('Here is full Array')
console.log(arr)

sum = 0
console.log('Summation of every even number')
for(i = 0; i < arr.length; i++ ){
    if(arr[i] % 2 === 0){
        // console.log(arr[i])
        sum += arr[i]
    }
}
console.log(sum)
sum = 0
console.log('Summation of every Odd number')
for(i = 0; i < arr.length; i++ ){
    if(arr[i] % 2 === 1){
        // console.log(arr[i])
        sum += arr[i]
    }
}
console.log(sum)