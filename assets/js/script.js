function nomes(...nome){
    console.log(nome)
}

nomes('Athos', 'José', 'Ademir')

////////////////////////////////////////////

function adicionar(nomes, ...novosNomes) {
    return [...nomes, ...novosNomes]
}

nomes = ["Athos", "Francisco"]

let outros = adicionar(nomes, "Carlos", "Gabriel", "RUbenilson")

console.log(outros)