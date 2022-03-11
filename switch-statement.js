var date = new Date()

console.log(date)
// console.log(date.getDay())

var today = date.getDay()
// console.log(today)

// Day of week 
// Using else if 
/*
if(today == 0){
    console.log('Sunday')
} else if(today == 1){
    console.log('Monday')
} else if (today == 2){
    console.log('Tuesday')
} else if (today == 3 ){
    console.log('Wednesday')
} else if (today == 4){
    console.log('Thursday')
} else if (today == 5){
    console.log('Friday')
} else {
    console.log('Saturday')
} 
*/

// Day of week using switch case statement 
switch(today){
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    default:
        console.log('Not a valid Number')
}
