var person = [
    {
        name: 'Emad',
        age: 22
    },
    {
        name: 'Mukit',
        age: 23
    },
    {
        name: 'Yaseen',
        age: 19
    },
    {
        name: 'Aysha',
        age: 29
    }
]

var arr = [3,5,1,7,9,0,2,6,5,1,7,9,3 ,4,8]
arr.sort()
// console.log(arr)

// console.log(person)
// person.sort()
// console.log(person)

var arr2 = [3,5,1,-7,-1,-6,9,0,2,6,5,1,7,9,3,-3,-8,4,8]
// console.log(arr2.sort()) // so sort is not working properly


console.log(arr2.sort(cb))
function cb(a,b){
    if(a > b){
        return 1
    } else if (a < b){
        return -1
    } else {
        return 0
    }
}

console.log(person.sort(cbd))
function cbd(a, b){
    if(a.age > b.age){
        return 1
    } else if (a.age < b.age){
        return -1
    } else {
        return 0
    }
}

var arrPstv = [3,5,1,7,9,0,2,6,5,1,7,9,3 ,4,8]

var result = arrPstv.every(pstvcb)
function pstvcb(value){
    return value % 2 === 0
}
console.log(result)

var result2 = arrPstv.every(pstvcb2)
function pstvcb2(value){
    return value >= 0
}
console.log(result2)

var result3 = arrPstv.some(pstvcb3)
function pstvcb3(value){
    return value >= 0
}
console.log(result3)

var result4 = arrPstv.some(pstvcb4)
function pstvcb4(value){
    return value >= 0
}
console.log(result4)







