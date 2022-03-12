// First Class Function
function add(a, b){
    return a +b

}

// 1. A Function can be stored in a Variable
var sum = add
console.log(typeof(sum))
console.log(sum(434, 234523))

// 2. A Function can be stored in an Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](50,40))
console.log(typeof(arr))

// 3. A Function can be stored in an Object
var obj = {
    sum : add
}

console.log(obj)
console.log(obj.sum(5,7))

// 4. We can create function as need

setTimeout(function(){
    console.log('This is setTimeOut')
}, 100)