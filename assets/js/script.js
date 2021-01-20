// 22 - Includes e repeat

let receitaArray = ['ovo', 'farinha', 'trigo']
let nome = 'Athos'

console.log(receitaArray.includes('ovos'))
console.log(nome.includes('O'))

console.log(nome.repeat(10))

// 23 Objeto: Key, Values e Entries

let pessoa = {
    nome: 'Athos',
    sobrenome: 'Francisco',
    idade: 100
}

console.log(Object.keys(receitaArray))
console.log(Object.keys(pessoa))

console.log(Object.values(receitaArray))
console.log(Object.values(pessoa))

console.log(Object.entries(receitaArray))
console.log(Object.entries(pessoa))

// 24 - String, padStart, padEnd

let cartao = '1234123412341234'

let cartaoReduzido = cartao.slice(-4)
let cartaoReduzidoFinal = cartao.slice(0, 4)

console.log(cartaoReduzido.padStart(16, '*'))
console.log(cartaoReduzidoFinal.padEnd(16, '*'))