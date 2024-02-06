let valores = [8, 1, 7, 2, 9, 4]
valores.sort()

//console.log(valores[0])

/*for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// para cada posição dentro de valores...
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // ...vou mostrar o num[pos]
}