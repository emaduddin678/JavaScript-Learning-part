// let arr= [2,3,4,5,3]
// console.log(typeof(arr))
// let arrStr = arr.toString()
// console.log(arrStr)
// console.log(typeof(arrStr))
// arrStr = arr.join(" * ")
// console.log(arrStr)

// // unshift and push have to give some Element
// let fruits = ['Apple', 'Banana', 'Coconut', 'Grape', 'Orange', 'Mango']
// console.log(fruits)
// console.log(typeof(fruits))
// console.log(fruits.join('*'))
// so pop remove the last Element of arr/ Object
// console.log(fruits.pop()) //it's shows last element  and remove last element
// console.log(fruits) 
// console.log(fruits.shift()) //it's shows first element  and remove first element
// console.log(fruits) 
// console.log(fruits[0])
// fruits.push('Pineapple') // push add element on last
// console.log(fruits)
// console.log(fruits.length)
// fruits.unshift('Pineapple') //  unshigt add element on first
// console.log(fruits)



let fruits = ['Apple', 'Banana', 'Coconut', 'Grape', 'Orange', 'Mango']
console.log(fruits)
// fruits[0] = 'Nut' // changes the first elements of fruits to Nut
// console.log(fruits)
// fruits[fruits.length] = 'Nut'
// console.log(fruits)
delete fruits[0]; // use pop or shift to delete element
console.log(fruits)