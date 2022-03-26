// alert('I am Emad')
// console.log('I am Rectangle')
// var rect ={
//     width: 100,
//     height: 20,

//     draw: function(){
//         console.log('I am Rectangle')
//         console.log('My Width is ' + this.width)
//         console.log('My Height is ' + this.height)
//     }
// }
// // console.log(rect.width)
// // console.log(rect.height)

// rect.draw()

// rect.height = 100;
// rect.draw()

// This use 

// function myFunc(){
//     console.log(this)
//     // rect.prinProperties()
// }

// // myFunc()
// new myFunc()

// var rect ={
//     width: 100,
//     height: 20,
    
//     draw: function(){
//         console.log('I am Rectangle')
//         this.prinProperties()
//         console.log(this)
//     }, 
//     prinProperties: function(){
//         console.log('My Width is ' + this.width)
//         console.log('My Height is ' + this.height)

//     }
// }

// rect.draw()

// var another = {
//     width: 444,
//     height: 222,
//     newPrint: rect.prinProperties
// }

// another.newPrint()



// new 
var createRect = function(width,height){
    return {
        width: width,
        height: height,
    
        draw: function(){
            console.log('I am Rectangle')
            this.printProperties()
            console.log(this)
        },
        printProperties: function(){
            console.log('My Width is ' + this.width)
            console.log('My Height is ' + this.height)
        }
    }
}

// var rect1 = createRect(20, 15)
// rect1.draw()

// var rect2 = createRect(30, 20)
// rect2.draw()

// Constructor
// Every Constructor starts with capital letter 
var Rectangle = function(width,height){
    this.width= width
    this.height= height

    this.draw= function(){
        console.log('I am Rectangle')
        this.printProperties()
        console.log(this)
    }
    this.printProperties= function(){
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }
}
var rect3 =new Rectangle(10,8)
rect3.draw()

