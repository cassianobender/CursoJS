function carregar(){
    var data = new Date()
    var anoSistema = data.getFullYear()
    //var ano = 1992 
    var ano = window.document.getElementById('ano')
    var idade = anoSistema-Number(ano.value)
    var sexo = 'Feminino'
    var sexo = window.document.getElementsByName('sexo')    
    var timg = window.document.getElementById('timg')
    var insimg = window.document.getElementById('insimg')
    var imagem = window.document.getElementById('imagem')//buscando elemento do arquivo
    var img = document.createElement('img')//criando o elememento <img></img>
    img.setAttribute('id','foto')
    //Transforma Masculino em Homem e Feminino em Mulher
    if(sexo[0].checked){
        sexo = 'Homem'
        document.body.style.background = '#4a7ef9'
        if(idade >0 && idade <16){
            timg.innerHTML = `Detectamos ${sexo} com ${idade} anos`
            //imagem.src = 'criancamasc.png'
            img.setAttribute('src', 'criancamasc.png')
        }else if(idade >=16 && idade <45){
            timg.innerHTML = `Detectamos ${sexo} com ${idade} anos`
            //imagem.src = 'homemmeio.png'
            img.setAttribute('src', 'homemmeio.png')
        }else //if(idade >= 45 && sexo == 'Homem')
        {
            timg.innerHTML = `Detectamos ${sexo} com ${idade} anos`
            //imagem.src = 'homemvelho.png'
            img.setAttribute('src', 'homemvelho.png')
        }
    }else if(sexo[1].checked){
        sexo = 'Mulher'
        document.body.style.background = '#D54979'
        if(idade >0 && idade <16){
            //crianca
            timg.innerHTML = `Detectamos ${sexo} com ${idade} anos`
            //imagem.src = 'criancafem.png'
            img.setAttribute('src', 'criancafem.png')
        }else if(idade >=16 && idade <45){
            //jovem
            timg.innerHTML = `Detectamos ${sexo} com ${idade} anos`
            //imagem.src = 'mulhermeio.png'
            img.setAttribute('src', 'mulhermeio.png')
        }else if(idade >= 45 ){
            //velho
            timg.innerHTML = `Detectamos ${sexo} com ${idade} anos`
            //imagem.src = 'mulhervelha.png'
            img.setAttribute('src', 'mulhervelha.png')
        }
    }
    timg.appendChild(img)
   // timg.innerHTML = `Detectamos ${sexo} com ${idade} anos`
    
}
