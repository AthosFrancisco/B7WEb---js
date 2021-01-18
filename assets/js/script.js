let d = new Date()
let resultado

resultado = d.getFullYear()
resultado = d.getMonth() // retorna o mês mas a contagem começa do 0
resultado = d.getDay() //retorna o dia da semana, começando no domingo (0)
resultado = d.getDate() // dia atual
resultado = d.getHours() 
resultado = d.getMinutes() 
resultado = d.getSeconds() 
resultado = d.getMilliseconds() 
resultado = d.getTime() 

// d.setFullYear(2023)
// d.setFullYear(d.getFullYear()+3)
// resultado = d.setMonth(60)
// resultado = d.setMonth(d.getMonth() + 60)
// resultado = d.setDate(d.getDate()+50)
// resultado = d.setHours(d.getHours() + 50) 
// resultado = d.setMinutes(d.getMinutes() + 50) 
// resultado = d.setSeconds(d.getSeconds() + 50) 
// resultado = d.setMilliseconds(d.getMilliseconds() + 50)  
resultado = d.setTime(d.getTime() + 50)

// console.log(resultado)
console.log(d)