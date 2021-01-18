let pessoa = {
    // nome: 'Athos',
    sobrenome: 'Francisco',
    idade: 100,
    social:{
        instagram: {
            url: 'AthosFrancisco',
            seguidores: 100000
        },
        github: 'AthosFrancisco'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

// let nome = pessoa.nomeCompleto()
let {nome:pessoaNome = 'Nenhum', sobrenome, sexo = 'm', social:{instagram:{url:instagram, seguidores}}} = pessoa

console.log(pessoaNome, sobrenome, sexo, instagram, seguidores)

function nomeCompleto({nome = 'Nenhum', sobrenome}){
    return `${nome} ${sobrenome}`
}

console.log(nomeCompleto(pessoa))