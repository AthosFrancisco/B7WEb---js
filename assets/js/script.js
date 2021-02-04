fetch('https://alunos.b7web.com.br/api/ping',
    {
        // method: 'POST', chamada post não funciona para essa url, por isso não dá pra enviar no bory da requisição
        method: 'GET',
        // body: JSON.stringify({
        //     nome: 'Athos',
        //     idade: 26
        // })
    })
    .then((r)=>r.json())
    .then((json) => {
        console.log(json.resultado[0])
    })