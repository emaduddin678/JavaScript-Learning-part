function add(a, b) {
    return a + b
}

function manipulate(a, b, func) {
    var c = a + b
    var d = a - b

    function multiply() {
        var m = func(a, b)
        return c * d * m

    }
    return multiply
}

var multiply = manipulate(5, 6, add)
console.log(multiply())