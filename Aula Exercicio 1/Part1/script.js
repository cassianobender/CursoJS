
function carregar(){
    var hora = 19
    var div1 = window.document.getElementById('Div1')
    //var div2 = window.document.getElementById('Div2')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    div1.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora <=12) {
        //Bom Dia
        imagem.src = 'dia.png'
        document.body.style.background = '#6C4966'
    }  else if (hora>=12 && hora <=18){
        //Boa tarde
        imagem.src = 'tarde.png'
        document.body.style.background = '#B39064'
    } else {
        //Boa Noite
        imagem.src = 'noite.png'
        document.body.style.background = '#354B84'
    
    }
    
}
