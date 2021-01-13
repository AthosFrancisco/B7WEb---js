let lista = ['Palio', 'Siena', 'Uno', 'Estrada']
let lista2 = [1,2.,3]

let resultado
resultado = lista.toString()
resultado = lista.join('/')
resultado = lista.indexOf('Uno')
resultado = lista.concat(lista2)

console.log(resultado)

lista.pop() // remove o último elemento
console.log(lista)

lista.shift() //remove o primeiro elemento
console.log(lista)

lista.push('Toro') //adiciona item no array
console.log(lista)

lista.splice(1,1) //exclui elementos do array
console.log(lista)

lista.sort()
lista.reverse()
console.log(lista)
