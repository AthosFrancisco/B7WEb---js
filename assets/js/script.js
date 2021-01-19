let numeros = [1,2,3,4]

let outrosNumeros = [...numeros, 5,6,7,8]

console.log(outrosNumeros)

/////////////////////////////////////////

adicicionarInfo = info =>{
    let novasInfo = {
        ...info,
        status: 0,
        token: 'sdhlfjgsjdlfkjlj',
        data_cadastro: '.....'
    }
    return novasInfo 
}

console.log(adicicionarInfo({nome: 'Athos', sobrenome: 'Francisco'}))