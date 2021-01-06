let carros = ['Palio', 'Siena', 'uno Mille', 'Mille Fire']; 
let texto = '';

// for (let i = 1; i <= 50; i++) {
//     texto = texto + i + '</br>';
// }

for (let i in carros) {
    texto += carros[i]+'</br>';
}

document.getElementById('demo').innerHTML = texto;