// Every pure function hase two condition 

// It returns the same value if given same arguement
// It does not cause any observable side effects 

function sqr(n){
    return n*n
}

console.log(sqr(5))
console.log(sqr(2))
console.log(sqr(3))


var n = 10
console.log(n)
function change(){
    n = 100
}

change()
console.log(n)

var point = {
    x : 40,
    y : 50
}


console.log(point)

function printPoint(point){
    point.x = 400,
    point.y = 500
    console.log(point)
}

printPoint(point)
console.log(point)