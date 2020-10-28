function clicou() {
    // alert("Você clicou no botão");

    document.getElementById('titulo').innerHTML = 'Obrigado!';
}

function eventKey(e){
    if(e.keyCode == 13){
        let texto = document.getElementById('campo').value;
        alert(texto);
    }
}