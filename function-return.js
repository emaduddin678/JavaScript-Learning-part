// Using return 
function useReturn(){
    var sum = 0;
    for (var i = 0; i< arguments.length; i++){
        sum += arguments[i]
    }
    return sum;

}

var testReturn = useReturn(1,2,3,4,5)

console.log(testReturn)

function person (name, email){
    return {
        name: name,
        email: email
    }
}
console.log(person('Emad', 'emaduddin678@gmail.com'))

var p1 = person('Emad', 'emaduddin678@gmail.com')

console.log(p1)