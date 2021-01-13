let lista = [
    {id: 1, nome: 'Athos', sobrenome: 'Francisco'},
    {id: 2, nome: 'Pedro', sobrenome: 'Lira'},
    {id: 3, nome: 'Alexia', sobrenome: 'Lucia'},
]

let pessoa = lista.find(function(item){
    return item.sobrenome == 'Lucia'
})

pessoa = lista.findIndex(function(item){
    return item.sobrenome == 'Lucia'
})

console.log(pessoa)