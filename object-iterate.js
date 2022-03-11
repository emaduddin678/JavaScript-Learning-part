var obj = {
    x: 30,
    y: 40,
    z: 50
}

// console.log('x' in obj)
// console.log('p' in obj)

for(var k in obj){
    // console.log(i)
    console.log( k, ':', obj[k])
}


