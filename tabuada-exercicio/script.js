function tabuada() {
    let num = document.getElementById('textonumero')
    let tabuada = document.getElementById('selectab')
    // se o numero digitado for igual a 0 aparecer a mensagem "por favor digite um numero"
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    // se não, ele vai converter o valor digitado pelo usuário para um NUMERO
    } else {
        //quando vc envolve algo na função 'number()' ele converte o valor para um numero
        // é util quando é preciso obter um valor numero e usá-lo em calculos matematicos no codigo
        let n = Number(num.value)     
        let c = 1
        // antes de mostrar a tabuada, o campo é limpado
        tabuada.innerHTML = ''
        // enquanto o contador (c) for menor ou igual a 10
        while (c <= 10) {
            // para preencher um elemento <select> em um formulário html
            let item = document.createElement('option')
            // item text = parte de dentro do option
            // n = valor digitado pelo usuário
            // n*c = n x c
            item.text = `${n} x ${c} = ${n*c}`
            // essa linha faz mais sentido para outras linguagens (ex: php):
            item.value = `tabuada${c}`
            // adiciona um elemento filho (o item)
            tabuada.appendChild(item)
            //c++ = c+1 
            c++
        }
    }
    
}