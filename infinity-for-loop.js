// Infinity For Loop 
for( ; ; ){
    rand = Math.floor(Math.random() * 10 + 1)
    if(rand === 1){
        console.log('Winner winner chicken dinner')
        break   
    } else {
        console.log('You have got ' + rand)
    }
}