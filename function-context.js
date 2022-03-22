// Execution Context 

function a(){
    b()
    console.log('I am function A, here calling Function B')
}

function b(){
    d()
    console.log('I am function B, here calling Function D')
}

function c(){
    console.log('I am function C, no Call here')
}

function d(){
    c()
    console.log('I am function D, here calling function A')
}

a()

console.log('This is Global Context')



// Execution of C Function Context
// Execution of D Function Context
// Execution of B Function Context
// Execution of A Function Context

// Execution of Global Context 