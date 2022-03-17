function add (a,b,c){
    return a + b + c
}
// console.log(add(4,2,8))

function first(a){
    return function (b){
        return function third(c){
            return a + b + c
        }
    }
}

var result = first(5)(10)(15)
console.log(result)

// var sum = first(5)
// var sum2 = sum(10)
// var sum3 = sum2(25)
// console.log(sum3)