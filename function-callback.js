function sample(a, b) {
    var c = a + b
    var d = a - b
    var result = sum(c, d)
    console.log(result)

}

function sum(a, b) {
    return a + b
}

sample(5, 6)