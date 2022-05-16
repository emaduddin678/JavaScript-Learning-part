let scores = {
    "quiz_1": 90,
    "quiz_2": 0,
    "quiz_3": 30,
    "quiz_4": 60,
    "quiz_5": 20,
    "quiz_6": 70,
    "quiz_7": 80,
    "quiz_8": 10,
    "quiz_9": 40,
    "quiz_10": 50
}
// console.log(scores)
let arr = Object.entries(scores)
// console.log(arr)

let students = {
    "student": {
        "firstName": 'Emad',
        "lastName": 'Uddin'
    },
    "attempts": ['1/15/2020','2/28/2020','3/2/2020'],
    "quiz_1": 90,
    "quiz_2": 0,
    "quiz_3": 30,
    "quiz_4": 60,
    "quiz_5": 20,
    "quiz_6": 70,
    "quiz_7": 80,
    "quiz_8": 10
}

// console.log(students)
let arr2 = Object.entries(students)
// console.log(arr2)

let newStudent = Object.fromEntries(arr2)
// console.log(newStudent)

// let arr3 = [1,2,3,4,5,6,7];
let arr3 = [[1,2],[3,4],[5,6]];
let obj3 = Object.fromEntries(arr3)
// console.log(obj3)


let scores4 = {
    "quiz_1": 90,
    "quiz_2": 0,
    "quiz_3": 30,
    "quiz_4": 60,
    "quiz_5": 20,
    "quiz_6": 70,
    "quiz_7": 80,
    "quiz_8": 10,
    "quiz_9": 40,
    "quiz_10": 50
}
let arr4 = Object.keys(scores4)
console.log('This is an array of scores4 object only keys', arr4)

