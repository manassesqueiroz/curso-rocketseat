 
    const button = document.getElementById("clicar")
    console.log(button)
    
    
   button.addEventListener("click",() => {
    let valor = document.getElementById('pegar')
    let h1 = document.getElementById('coloco')
    h1.innerHTML = (valor.value)
    
   })

   // document.getElementsClassName() 
   // document.getElementsByTagName()
   // document.querySelector()
   // document.querySelectorAll()

