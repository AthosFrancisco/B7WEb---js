let lista = [45, 4, 9, 16, 25, 85]
let lista2 = []

lista2 = lista.map(function(item){
    return item*2
})

lista2 = lista.filter(function(item){
    return item > 20
})

lista2 = lista.every(function(item){
    return item <100
})

lista2 = lista.some(function(item){
    return item > 100
})

console.log(lista2)