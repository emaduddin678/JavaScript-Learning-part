abc() // in creational phase this will be skiped

function abc(){
    console.log('This is a Execution Context Function')
}

abc()


// Creational phase
// skip abc()
// abc = Reference (only work in function)

// Executional phase
// top abc() -> it work from reference
// abc() -> it also work from Reference



