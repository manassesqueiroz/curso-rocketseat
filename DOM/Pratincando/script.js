const button = document.querySelector('#openModel')
const div = document.querySelector('div')
const modalWrapper = document.querySelector('.modal-wrapper')

button.addEventListener('mouseover', () =>{
    div.classList.toggle('invisible')
})
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