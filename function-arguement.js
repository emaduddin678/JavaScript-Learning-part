function add(a, b){
    var sumation = a + b
    console.log( sumation ) 
}

var arr1 = [1,2,3,4,5]
var arr2 = [3,5,7,9]
var arr3 = [5,10,15,20]
/*
add(5, 7)
add(999, 111)
add(234, 93845)

var arr1 = [1,2,3,4,5]
var arr2 = [3,5,7,9]
var arr3 = [5,10,15,20]

var sum1 = 0;
for(var i = 0; i<arr1.length; i++){
    sum1 += arr1[i]
}
console.log(sum1)

var sum2 = 0;
for(var i = 0; i<arr2.length; i++){
    sum2 += arr2[i]
}
console.log(sum2)

var sum3 = 0;
for(var i = 0; i<arr3.length; i++){
    sum3 += arr3[i]
}
console.log(sum3)
*/ 
/*
function sumOfArray(arrya){
    var sum = 0;
    for(var i = 0; i < arrya.length; i++){
        sum += arrya[i]
    }
    console.log(sum);

}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)
*/

function test(a,b,c){
    console.log(arguments)
    console.log(JSON.stringify(arguments))
    console.log(typeof(a))
}

test()