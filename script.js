function alterar(){
    document.getElementById('titulo').innerHTML = 'Trocou o título';
    document.getElementById('campo').value = 'Trocou o campo';
}

function somar(x, y){
    let result = x+y;
    return result;
}

var resultado = somar(1,2);

console.log(resultado);