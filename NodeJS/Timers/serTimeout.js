const time = 4000
const disparo = () => console.log("HUULLLL!!!"); 


let timer = setTimeout(disparo, time) 

console.log(clearTimeout(timer));