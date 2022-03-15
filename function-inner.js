// function greetMe(greet, name){
//     function sayHi(){
//         console.log(greet, name)
//     }
//     sayHi()
// }
function greetMe(value, valid){
    console.log(value, valid)
}

greetMe('Hello', 'Emad Uddin')

// greeting first name 
function greetMe2(greet2, name2){
    function getFirstName(){
        if(name2){
            return name2.split(' ')[0]
        } else{
            return ''
        }
    }
    var message = greet2 + ' ' + getFirstName()
    console.log(message)
}

// greetMe2('Good Morning', 'Emad Uddin Emad')
// greetMe2('Good Morning')


function main(n){
    function a(){
        return n % 3 === 0
    }
    function b(){
        return n % 5 === 0
    }
    if (a() && b()){
        console.log('Both are divisible by 3 and 5')
    } else{
        console.log('Not a valid number')
    }

}

main(15) 



