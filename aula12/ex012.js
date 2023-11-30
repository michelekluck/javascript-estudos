var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 16) { // se idade é menor que 16 não vota
    console.log('Não vota')
} else if (idade < 18 || idade > 65) { // se não, se a idade for maior que 18 ou maior que 65 anos é opcional
        console.log('Voto Opcional')
} else { // se a idade for maior ou igual a 18 o voto é obrigatório
    console.log('Voto Obrigatório')
}


