let time

function rodar(nome){
    time = setTimeout(function(){
        document.querySelector('#demo').innerText = `Rodou ${nome}` 
    }, 2000, nome)
}

function parar(){
    clearTimeout(time)
}

document.querySelector('#init').addEventListener('click', rodar('Athos'))
document.querySelector('#finish').addEventListener('click', parar)