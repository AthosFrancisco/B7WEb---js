const fazer = () =>{
    return new Promise((res, rej) => {
        // res('OK');
        setTimeout(() => {
            res('OK');
        }, 3000);
    })
}

fazer()
    .then((resposta) => {
        console.log(resposta)
    })

console.log('Depois da promessa')