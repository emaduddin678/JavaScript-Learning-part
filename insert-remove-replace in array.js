// Insert and Remove Element

var arr = [1,2,3,4,5,6,7,8]

// Insert 9 to index 3

// arr[3] = 9
// this is inserting 9 instead of 4 in index 3

// console.log(arr)

// arr.push(9)
// arr.unshift(9)

// arr.splice(3, 0, 9, 10)
// arr.slice(index number, remove number = 0, push Number)

// arr[3] = null
// arr[4] = undefined
// console.log(arr.length)

// to remove last Element
// arr.pop()
// to remove first Element
// arr.shift()

// to remove any index element we should use splice here 

// arr.splice(3, 5)
// console.log(arr.length)

// splice ( index, how many item you want to remov, then insert)
// using this same logic we can update 

arr.splice(3, 1, 99)

console.log(arr)
