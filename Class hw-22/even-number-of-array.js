let arr=[29, 23,52, 85,34, 345,87,54,24,53,12,98,90,430];
var sum = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 == 0){
        console.log(arr[i])
        sum += arr[i]
    }
}
console.log('This is the sum of Even number')
console.log(sum)