let arr=[29, 23,52, 85,34, 345,87];
let reverseArr = [];

for (let i = 0; i <= arr.length - 1; i++) {
   reverseArr.unshift(arr[i]);

}

console.log(reverseArr);