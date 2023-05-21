const { EventEmitter}  = require('events')


let ev = new EventEmitter

ev.on('i am the DANGER', (person) => 
console.log(`Eu te ouvir ${person}`) )
ev.emit('i am the DANGER',"WALTER")





// // // // // // // // // // emit == Emitir Desparo 
// // // // // // // // // // on == Capturar Desparo 
// // // // // // // // // // once == Capturar Primeiro despara