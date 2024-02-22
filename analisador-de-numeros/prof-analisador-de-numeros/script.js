let num = document.querySelector('input#fnum') //fnum é o id do input
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // vetor/array

// essa função recebe um parametro
function isNumero(n) {
    //vai retornar true se for um numero entre 1 e 100, caso contrario retornará false
    if(Number(n) >= 1 && Number(n) <= 100 ) {
        return true
    } else {
        return false
    }
}

// essa função recebe 2 parametros)
function inLista(n, l) {
    //retorna true se o numero 'n' estiver presente no array 'l', caso contrário retornará false
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// sera executado ao clicar o botao adicionar
function adicionar() {
    // so vai adicionar o numero se for UM NUMERO e se NAO ESTIVER NA LISTA
        if(isNumero(num.value) && !inLista(num.value, valores)) {
            //adicionar um numero no array valores (num.value é o numero digitado pelo usuario)
           valores.push(Number(num.value))
           //item = numero que seja adicionado dentro da caixa select
           // para adicionar itens dentro de select é preciso criar um option 
           // option é uma tag 
           let item = document.createElement('option')
           // este item será uma string que vai retornar esse texto:
           // num.value é o valor digitado pelo usuario
           item.text = `Valor ${num.value} adicionado.`
           //adicionado um "filho", no caso a variavel item, dentro da variavel lista que é o select
           lista.appendChild(item)
           // quando um elemento for adicionao ele vai limpar o resultado
           res.innerHTML= ''
        } else {
            window.alert('Valor inválido ou já encontrado na lista.')
        }
        //aqui faremos que a caixa de escrever se apague sozinha depois de adiocionar um numero
        // num.value recebe vazio
        num.value = ''
        //o focus é como se o usuario clicasse o mouse na caixa de escrever ate o cursor piscar
        num.focus()
}

// ação que será feita ao clicar o botão finalizar
function finalizar() {
    // se o "comprimento" de valores for igual a 0, ou seja, nao tiver nada no array valores
    if(valores.length == 0) {
        // vai ser disparado um alert com a seguinte frase
        window.alert(`Adicione valores antes de finalizar!`)
    } else {
        // total será uma variavel que vai trazer o total de elementos do array valores
        let total = valores.length
        // valores[0] porque o primeiro valor adicionado sempre terá o indice 0
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        // para cada posição em valores
        // laço de percurso
        // é a mesma coisa se eu estivesse fazend: for(let pos = 0; pos < valores.length; pos ++)
        // ou seja, a variavel pos é igual ao indice 0, e vai passando por todos os elementos de valores ate acabar
        for(let pos in valores) {
            // vai somar o valor o atual, ou seja, começa com 0 e vai somando com os outros que venham a seguir
            soma += valores[pos]
            // se valores na posição pos for maior do que o maior valor...
            if(valores[pos] > maior)
            // ...o maior valor passa a ser pos, deixa de ser o anterior e passa a ser esse
                maior = valores[pos] 
            // se valores pos for menor do que o menor...
            if(valores[pos] < menor)
            //...o menor passa a ser pos
                menor = valores[pos]
        } 
        // a media será a soma dividivo pelo total
        media = soma / total
        // a variavel res vai receber vazio
        res.innerHTML= ''
        // += serve para concetenar um valor com o outro
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.`
    }
}