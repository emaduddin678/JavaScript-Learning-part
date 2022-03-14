function sample(a, b) {
    var c = a + b
    var d = a - b
    var result = sum(c, d)
        // here we callback sum function
    return result

}

function sum(a, b) {
    return a + b
}

console.log(sample(55, 45))

// here if we want to use another function, we have to pass the function as arguement
// lik sample(a, b, anyfunc)

function sample2(a, b, avd) {
    var c = a + b
    var d = a - b
    var result = avd(c, d)
        // here we callback sum function
    return result

}

function sum(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function division(a, b) {
    return a / b
}

var result = sample2(10, 8, sub)
console.log(result)

var result2 = sample2(5, 2, function(c, d) {
    return c % d
})
console.log(result2)