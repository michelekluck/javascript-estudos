function contar() {
    //obtém os elementos HTML com os IDs
    let ini = document.getElementById('textoinicio')
    let fim = document.getElementById('textofim')
    let passo = document.getElementById('textopasso')
    let res = document.getElementById('res')
    // verifica se algum dos campos está vazio:
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados')
    } else {
    // se nenhum campo estiver vazio, inicializa a mendagem de resultado
        res.innerHTML = 'Contando: <br>'
    // converte os valores dos campos para numeros
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
    //se o campo "passo" for menor ou igual a 0
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1 // neste caso o 0 passa a ser 1
        }
    //utiliza um loop FOR para contar de 'i' (inicio) até 'f'(fim) com um passo 'p'
    //se i for maior do que f faz contagem CRESCENTE
        if(i < f) {
        for(let c = i; c <= f; c += p) {
    //adiciona cada valor de 'c' à mensagem de resultado
            res.innerHTML += `${c} \u{1F449}` //emoji
            }
        } else {
    //se i for maior do que f faz contagem REGRESSIVA
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}` 
            } 
        }
        res.innerHTML += `\u{1F3C1}`
    }
}