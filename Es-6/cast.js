// const castArray = (value) => (Array.isArray(value) ? value : [value]);

let value = 5646;

function castArray2(value){
    // Array.isArray(value) ?  value : [value]
    if(Array.isArray(value)){
        return value
    } else {
        return [value]
    }
}

// console.log(castArray2(value))

// console.log(typeof(castArray2))

let arr = [1,2,3]
const isEmpty = (arr) => Array.isArray(arr) && !arr.length;
// console.log(isEmpty(arr))

// console.log(!arr.length)

const clone = (arr) => arr.slice(0);
console.log(clone(arr))
