// Arithmetic Operator
// + - * / % ++ --

var a = 11
var b = 5
 
console.log(a/b)
console.log(a%b)

// Incremental Operator 
// Pre-Incremental(++a)      (a++)Post-Incremental
console.log(a++)
console.log(++a)

// Dicremental Operator 
// Pre-Decrimental(--a)          (a--)Post-Decrimental
console.log(b--)
console.log(--b)


// Assignment Operator
a = 20
b = 10

a += b

console.log(a)

a -=b
console.log(a)

a*=b
console.log(a)

a /= b
console.log(a)

a %=b
console.log(a)

// Comparison equal Operator

var a = 20
var b = 10

console.log(a == b)

b =20
console.log( a == b)

// Comparison not equal Operator

a = 20
b = 10

console.log(a != b)

a = 30 
b = 30
console.log( a != b)

console.log('This is new')
console.log( a>b)
console.log(a<b)

// Using logical operator (not)
console.log(!(a>b))
console.log(!(a<b)) 

// if we use double !!
console.log(!!(a>b))
console.log(!!(a<b))

console.log( a>= b)
console.log( a<=b )

// compare between with string and Number
var c = '50'
var d = 50

console.log( c == d)   
// Here string will conversion to number
console.log( c === d)
// Here check value and data type also  ===
console.log( c !== d)
// Here check value and data type also  !==

// Logical Operator 
// if a, b, two condition 
// 1-  && either a true or b true
//    &  both condition have to be true
// 2-  || result will be true if only one condition is true 
// 3-   ! result will be not 


// Bitwise Operator
//   &    Multiply between 2 binary value 
//   |    make or operation between 2 binary vlaue 
//   ~    use this sign to not binary value 
//   ^    x-or 
// <<       Left shift to shift one number in left 
// >>       Right shift to shift one number in Right
//(typeof)     to find data type 
