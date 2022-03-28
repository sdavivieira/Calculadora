function(){
var msg = document.getElementbyId('msg')
var msg = document.getElementbyId('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 19
msg.innerHTML = `Agora são ${} horas.`
if(hora >= 0 && hora < 12){
    //BOM DIA!
    img.src = 'fotomanha.png'
} else if (hora >=12 && hora <= 18){
    // BOA TARDE!
    img.src = 'tarde.png'
} else (hora) {
// BOA NOITE!
img.src = 'noite.png'
}
}
