// throw

function sayMyName(name = '') {
    if (name === '')
    throw 'Nome é obrigatório'
console.log(name);
}

try {
    sayMyName('Manasses')
}catch(a){
    
}
console.log('apos a função')