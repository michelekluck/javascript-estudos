let numeros = []
function valores(){
    let num = document.getElementById ('numdigitado')
    let val = document.getElementById ('numadd')

    if (num.value.length == 0 || num.value > 100 || num.value <= 0){
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        numeros.push(Number(num.value))
        let item = document.createElement('li')
        item.innerHTML= `Valor ${num.value} adicionado.`
        val.appendChild(item)
        num.value = ''
    }
}

function existenteNaLista(numValue) {
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] == numValue){
            return true
        }
            
    }
            return false 
}

// [1, 2, 3]
// verificar se o 4 existe na lista
// 1 == 4 falso
// continua
// 2 == 4 falso
// continua
// 3 == 4 falso
// return false

function calculoResultado(){

    function tamanhoNumeros(){
       return numeros.length
    }

    function maiorValor(){
        let maiorValor = 0
        for(let i = 0; i < numeros.length; i++) {
            if(numeros[i] > maiorValor) {
                maiorValor = numeros[i]
            }
        }
        return maiorValor
    }

    function menorValor(){
        let menorValor = 101
        for(let i = 0; i < numeros.length; i++) {
            if(numeros[i] < menorValor) {
                menorValor = numeros[i]
            }
        }
        return menorValor
    }

    function somaValores(){
        let soma = 0
        for(let i = 0; i < numeros.length; i++){
            soma += numeros[i]
        }
        return soma
    }

    function mediaValores(tamanhoNumeros, somaValores){
        let media = somaValores / tamanhoNumeros
        return media
    }

    let tamanho = tamanhoNumeros()
    let maior = maiorValor()
    let menor = menorValor()
    let soma = somaValores()
    let media = mediaValores(tamanho, soma)

    let idUl = document.getElementById('resultado')

    let itemTamanho = document.createElement('li')
    itemTamanho.innerHTML = `Ao todo, temos ${tamanho} números adicionados`
    idUl.appendChild(itemTamanho)

    let itemMaior = document.createElement('li')
    itemMaior.innerHTML = `O maior valor informado foi ${maior}`
    idUl.appendChild(itemMaior)

    let itemMenor = document.createElement('li')
    itemMenor.innerHTML = `O menor valor informado foi ${menor}`
    idUl.appendChild(itemMenor)

    let itemSoma = document.createElement('li')
    itemSoma.innerHTML = `Somando todos os valores, temos ${soma}`
    idUl.appendChild(itemSoma)

    let itemMedia = document.createElement('li')
    itemMedia.innerHTML = `A média dos valores digitados é ${media}`
    idUl.appendChild(itemMedia)
}   
//  0   1   2
// [10, 43, 3]

// i = 0
// i <= array.lenght (3) verdade
// numeros[i] == 10
// i = 1
// i <= array.lenght (3) verdade
// numeros[i] == 43
// i = 2
// i <= array.lenght (3) verdade
// numeros[i] == 3
// i = 3
// i <= array.lenght (3) verdade
// numeros[i] == undefined
// i = 4
// i <= array.lenght (3) falso

//3 + undefined = NaN

// [1, 6, 9, 2, 4]
// maior valor = 0
// 1 > 0 verdade
// maior valor = 1
// 6 > 1
// maior valor = 6
// 9 > 6
// maior valor = 9
// 2 > 9
// 4 > 9
// acaba o for
// retorna o maior numero (9)

// maiorNumero = 0
// passa numero por numero do array
// compara se o numero atual eh maior do que o maior numero anterior
// se for maior substitui o maior numero anterior pelo novo
