// Manipulando Strinfs e Arrays

// Separe um texto que contem espaços, em um non array onde cada texto é uma posição do array.Depois disso, transdorme o array em um texto e onde eram espaços,coloque _


let phrase = "Eu quero sumir do Brasil é voltar X séculos no passado"
let myArray = phrase.split(" ")
let phraseWithespaceUnderline = myArray.join("___")
console.log(phraseWithespaceUnderline)

let titilo = 'Controle de fluxo da aplicação'

let Mytitulo = titilo.split(" ")
let titulonew = Mytitulo.join("__")
console.log(titulonew)