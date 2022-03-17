var a = 100

// newPrint(a)

print(10)

var newPrint = print
newPrint(45)

function print(a){
    console.log(a)
}

print(a)
console.log(typeof newPrint)


// Creational Phase
// a = undefined
// newPrint = undefined
// print = Reference


// Executiona Phase
// a = 100
// newPrint = undefined which can't be called, that's why we got an error
// print Call and result 
// newPrint = Reference of print




