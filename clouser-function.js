var a = 10;

function b() {
    console.log(a)
}

b()

function abc() {
    var x = 4
    return function() {
        console.log(x)
    }
}

var p = abc()
console.log(p)
console.dir(p)


// not completed