var point = {
    Math: 76,
    Physics: 82,
    Chemistry: 74,
    Biology: 68
}
/*
console.log(typeof point)
console.log(point)

// point.Biology = 60
// console.log(point)

// Update Higher Math Marks
point.HigherMath = 90
console.log(point)

// This is dot ( . ) notation 
console.log(point.Biology)
console.log(point.Math)
console.log(point.Biology + point.Math)

// This is Array [ ] notation 

console.log(point['Physics'])
console.log(point['Chemistry'])

var show = 'HigherMath'
console.log(point[show])
console.log(point)

console.log(point.Bangla)
point.Bangla = 33
console.log(point.Bangla)
console.log(point)

point['Bangla'] = 55
console.log(point['Bangla'])

console.log(point)

var prop = 'Bangla'
point[prop] = 50

console.log(point[prop])
console.log(point)
*/
console.log(point)

point.Biology = undefined
console.log(point)

delete point.Biology
console.log(point)
