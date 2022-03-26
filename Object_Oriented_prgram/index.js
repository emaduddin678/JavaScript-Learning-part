// alert('I am Emad')
// console.log('I am Rectangle')
var rect ={
    width: 100,
    height: 20,

    draw: function(){
        console.log('I am Rectangle')
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }
}
// console.log(rect.width)
// console.log(rect.height)

rect.draw()

rect.height = 100;

rect.draw()