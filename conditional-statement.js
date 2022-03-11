var a = 10
var b = 20 

// You have to print a/b greater than b/a
// For that we use if condtion and condtional operator between ( )
/*
if (condition){
    statement
}
*/
// Find Capital Number Using if statement
if (a > b){
    console.log('A is greater than B')
}

if (a < b){
    console.log('B is greater than A')
}

// find odd or even Number Using if statement
var n = 50

if (n % 2 == 0){
    console.log(n + ' is even Number')
}
if (n % 2 !== 0){
    console.log(n + ' is Odd Number')
}

console.log("This lower part using if else statement")

// If else Statement 

// Find capital Number using if else statement 
if (a>b){
    console.log("A is greater than B")
} else{
    console.log("B is greater than A")
}

// Find even or odd Number using if else

n = 532

if (n % 2 == 0){
    console.log(n + ' is even Number')
}else{
    console.log(n + ' is Odd Number')
}

// else if statement start here 
console.log("else if statement here")
// Find Capital Number using else if

a = 30 
b = 30 

if (a > b){
    console.log('A is greater than B')
} else if(b>a){
    console.log('B is greater than A')
} else {
    console.log("They both are equal")
}
