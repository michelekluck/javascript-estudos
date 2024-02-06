function contar() {
    let ini = document.getElementById('textoinicio')
    let fim = document.getElementById('textofim')
    let passo = document.getElementById('textopasso')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    } else {
        alert('TUDO OK!')
    }
}