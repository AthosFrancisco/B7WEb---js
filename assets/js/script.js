function showHour(){
    let date = new Date()
    let h, m, s
    h = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
    m = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()
    s = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()

    let demo = document.querySelector('#demo')
    demo.innerHTML = `${h}:${m}:${s}`
}

function cronometro(){
    let hour, minute, secound, millesecound
    hour = document.querySelector('#hour')
    minute = document.querySelector('#minute')
    secound = document.querySelector('#secound')
    millesecound = document.querySelector('#millesecound')

    // console.log(hour, minute, secound, millesecound)

    let h, m, s, mm
    h = Number.parseInt(hour.innerText)
    m = Number.parseInt(minute.innerText)
    s = Number.parseInt(secound.innerText)
    mm = Number.parseInt(millesecound.innerText)

    let date = new Date(2020,1,1,h,m,s,mm)
    date.setMilliseconds(date.getMilliseconds() + 100)

    h = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
    m = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()
    s = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()
    mm = date.getMilliseconds() < 10 ? '0'+date.getMilliseconds() : date.getMilliseconds()

    hour.innerText = h
    minute.innerText = m
    secound.innerText = s
    millesecound.innerText = mm
}

function clearCronometro(){
    document.querySelector('#hour').innerText = '00'
    document.querySelector('#minute').innerText = '00'
    document.querySelector('#secound').innerText = '00'
    document.querySelector('#millesecound').innerText = '000'
}

let time


function iniciar(){
    // time = setInterval(showHour, 1*1000)
    clearCronometro()
    time = setInterval(cronometro, 1*100)
}

function parar(){
    clearInterval(time)
}

document.querySelector('#init').addEventListener('click', iniciar)
document.querySelector('#finish').addEventListener('click', parar)