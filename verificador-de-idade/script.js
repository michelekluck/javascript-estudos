function verificar() {
    var data = new Date() 
    var ano = data.getFullYear() // puxa a data atual do sistema que está acessando o site
    var formularioano = document.getElementById('textoano') // id do input de escrever o ano
    var res = document.getElementById('res') 
    if (formularioano.value.length == 0 || formularioano.value > ano) { // se a caixa estiver vazia (==0) e valor acima de ano (ano atual)
        window.alert('[ERRO] Verifique os dados e tente novamente!') // se não cumprir com os de cima da erro
    } else {
        var formulariosexo = document.getElementsByName('radsex') // nome do formulario (feminino ou masculino)
        var idade = ano - Number(formularioano.value) // ano atual - o ano digitado
        var genero = '' // genero escolhido
        var img = document.createElement('img') // criou um elemento img
        img.setAttribute('id', 'foto') // criou um id chamado foto para o elemento img criado
        if (formulariosexo[0].checked) { // se selecionar masculino
            genero = 'Homem' // vai aparecer escrito 'homem' na tela
            if (idade >= 0 && idade < 10) { // se idade maior ou igual a 0 e menor que 10 será criança
                // criança
                img.setAttribute('src', 'criança_menino.png') // o src esta puxando a imagem
            } else if (idade < 24) { // se idade menor que 24 será jovem
                // jovem
                img.setAttribute('src', 'jovem_homem.png')
            } else if (idade < 50){ // se for menor que 50 anos será adulto
                // adulto
                img.setAttribute('src', 'adulto_homem.png')
            } else { // qualquer outra idade será idoso
                // idoso
                img.setAttribute('src', 'idoso_homem.png')
            }
        } else if (formulariosexo[1].checked) { // se escolher feminino no formulario
            genero = 'Mulher' // sera escrito 'mulher' na tela
            if (idade >= 0 && idade < 10) { // mesma coisa que acima
                // criança
                img.setAttribute('src', 'criança_menina.png')
            } else if (idade < 24) {
                // jovem
                img.setAttribute('src', 'jovem_mulher.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'adulta_mulher.png')
            } else {
                // idoso
                img.setAttribute('src', 'idosa_mulher.png')
            }
        }
        res.style.textAlign = 'center' // alinhando o texto abaixo no centro da tela
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // para aparecer a imagem na tela
    }
}