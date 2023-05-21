document.addEventListener('keydown', function (event) {
    var x = event.keyCode;
    console.log(x)
    if(x == 27){
        div.classList.toggle('invisible')

    }
    else{
        alert("tecla errada meu jovem")
    }
})