let num = [5, 8, 3, 9, 2]
num.push(1) // adiciona um elemento na ultima posição
num.sort() // coloca os elementos em ordem crescente (1,2,3,5,8,9)
console.log(num) // aparece o num na tela
console.log(`O vetor tem ${num.length} posições`) // fala o comprimento da array (quantos elementos tem)
console.log(`O primeiro valor do vetor é ${num[0]}`) // fala qual o valor que está no indice 0, no caso é o 1
let pos = num.indexOf(8) // cria uma variavel que busca valores dentro de um array, no caso o 8 está na posição 4
if (pos == -1 ){ // fala que se o pos for igual a -1...
    console.log(`O valor não foi encontrado`) // ...aparecer na tela essa mensagem...
} else { //...se não...
    console.log(`O valor está na posição ${pos}`) // aparecer na tela a posição que está o numero digitado, no caso 8, que está na posição 4
}
