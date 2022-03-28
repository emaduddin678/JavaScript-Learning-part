var emad = {
    firstName: 'Emad',
    lastName: 'Uddin',
    age: 22,
    fullName: function(){
        // console.log(this.firstName + this.lastName)
        return this.firstName + ' ' + this.lastName
    }

}
console.log(emad.fullName())
console.log('This is full Object'+ emad)