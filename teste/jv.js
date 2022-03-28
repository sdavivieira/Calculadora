function Verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano = document.getElementByid('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.legth == 0 || Number(fano.value) > ano){
        window.alert('[Erro] Verifique o dados e tente novamente!')

    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'homem'
        } else if (fsex[1].checked){
            genero = 'mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}