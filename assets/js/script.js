const requisitar = () => {
    fetch('https://alunos.b7web.com.br/api/ping')
        .then((r) => r.json())
        .then((json) => {
            console.log(json.resultado[0])
        })
    
        console.log('Depois de requisitar')
}

const requisitar2 = async () => {
    
    const r = await fetch('https://alunos.b7web.com.br/api/ping')
        
    const json = await r.json()
    
    console.log(json.resultado[0])
    
    console.log('Depois de requisitar 2')
}

requisitar2()