let infoArray = [
    'Athos Francisco', 
    'Athos', 
    'Francisco', 
    // '@thos'
]

function eventos() {
    return ['casamento', 'almoço', 'jantar']
}

let [a, b, c] = eventos()

console.log(a, b, c)

// let [nomeCompleto, nome, sobrenome, instagram] = infoArray
let [nomeCompleto, nome, , instagram = 'Não há'] = infoArray

console.log(nomeCompleto, nome, instagram)