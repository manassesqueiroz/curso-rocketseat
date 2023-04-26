/*
Function() constructor

* expressão new
* criar im novo objeto
* this keyword

*/
function Person(name,idade,sexo) {
    this.name = name
    this.sexo = sexo
    this.idade= idade
   
}

 let manasses = new Person('Manassés',17,"M")
 let joao     =
 new Person('João',15,"M") 
console.log(manasses,joao)
