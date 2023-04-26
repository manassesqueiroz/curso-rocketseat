/*  


    #Scope

        * Escopo determina a visibilidade de alguma variável no JS


        # Block staement

        vomos iniciar um bloco

        a qui dentro é um bloco e posso colocar qualquer código 
    
    
    // aqui fechamos o bloco 


O bloco criará um novo escopo. Chamamos de ' block-scope'



*/
// var é global e, também local
// hoisting
console.log('> existe X antes do bloco?',x)
{
   var x = 0
}
console.log('> existe X depois do bloco?',x)