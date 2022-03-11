var arr = [ 4, 8, 12, 16, 20, 24, 28, 32, 36]

var find = 20
var isFound = false

for (let i = 0; i < arr.length; i++) {
    if ( arr[i] === find ){
        console.log('We find this data in Array in index\t' + i)
        isFound = true 
        break
    }
    // else {
    //     console.log('We didn\'t find this number')
    // }
}

if (!isFound){
    console.log('We didn\'t find this number Or Data not found')
}