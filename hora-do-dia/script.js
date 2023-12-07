function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) { //se a hora for maior ou igual a 0 (meia noite) e a hora for menor que meio dia
    // BOM DIA !
    img.src = './assets/morning.png'
    document.body.style.background = '#F5B987'
} else if (hora >= 12 && hora <= 18) { // se a hora for maior ou igual a meio dia e a menor ou igual a 18 horas
    // BOA TARDE!
    img.src = './assets/evening.png'
    document.body.style.background = ' #DCA2C4'
 } else { // outro
    //BOA NOITE!
    img.src = './assets/night.png'
    document.body.style.background = '#141C32'
 }
}