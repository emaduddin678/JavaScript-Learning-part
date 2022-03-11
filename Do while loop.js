// Do while loop 
var isRunning = true
var rand

while(isRunning){
    rand = Math.floor(Math.random() * 10 + 1)
    if(rand === 1){
        console.log('Winner winner chicken dinner')
        isRunning = false
    } else(console.log('You have got ' + rand))
}

// do while?
isRunning = false
do {
    console.log('\nFirst time printing this, although isRunning is false')
} while(isRunning)