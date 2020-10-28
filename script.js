var campo = document.getElementById('titulo');

function verde(){
    limpaCor();
    campo.classList.add('verde');    
}
function vermelho(){
    limpaCor();
    campo.classList.add('vermelho');    
}
function azul(){
    limpaCor();
    campo.classList.add('azul');    
}

function limpaCor() {
    campo.classList.remove('verde');
    campo.classList.remove('vermelho');
    campo.classList.remove('azul');
}