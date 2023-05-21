const time = 4000
const disparo = () => console.log("HUULLLL!!!"); 

let timer = setInterval(disparo, time) 

setTimeout( () =>clearInterval(timer),12100 )

