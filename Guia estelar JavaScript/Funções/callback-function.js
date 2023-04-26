// callback funktion
function SayMyName(name){


    console.log('antes da função')

    name()

    console.log('deois da função')
    

     
   
}


SayMyName(() => {
    console.log('estou em uma callback')
})
