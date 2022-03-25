// for (let i = 1; i <= 8; i++) {
//     setTimeout(function () {
//         console.log(i);
//     },1000 * i)
// }

// console.log('Hello')
// setTimeout(function () {
//     console.log('hello World')
    
// }, 10000);


for (var i = 1; i <=5; i++){
    (function(n){
         setTimeout(function(){
        console.log(n)
    }, 1000*n)
}) (i)
    
}