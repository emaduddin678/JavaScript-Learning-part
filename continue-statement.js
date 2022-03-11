// for skip any Number we use continue statement 
var i

for(i = 0; i<= 10; i++){
    if(i === 3 || i === 5 || i === 6 || i === 7){
        continue
    } else {
        console.log(i)
    }
}