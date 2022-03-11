// For loop

var i
/*
for (let i = 0; i < 10; i++) {
    console.log( (i + 1) + '  Emad Uddin')
    
}


for (initializer, condition, increment) {
    statement
}


for (i = 1; i <= 10; i++){
    if( i % 2 === 1){
        console.log(i)
    }
    // console.log(i)
}*/
var sum = 0
for(i = 1; i <= 10; i++){
    console.log(sum + '+' + i + ' =' + (sum + i))
    sum += i
}
console.log('\n' + 'So, Total summation is = ' + sum) 