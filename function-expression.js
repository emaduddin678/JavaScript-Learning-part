var addition = function(a, b) {
    return a + b
}
var test = addition(99,1)
console.log(test)
test = addition
console.log(test(3,4))
console.log(addition(5,4))


setTimeout(function() {
    console.log('This is setTimeout Function')
    
}, 5000);