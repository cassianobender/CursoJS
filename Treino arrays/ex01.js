var tons = ['C','D','E','F','G','A','B']
escalas = ['C, G, D, F', 'a,b,c,d,e,f', 'g,h,i']
graus = [1,2,3,4,5,6]
escala_principal = [graus[0],graus[4],graus[3]]
tom_escolhido = tons[1]
console.log(tom_escolhido)
escalas.push('a,b,c,d,e,e,ef,ef,g')
console.log(escalas.indexOf('g,h,i'))
//escalas.sort()

function apresenta_esc_pr(){
    for(n in escala_principal)
    console.log(escala_principal[n])
}

function apresenta_tons(){
    for (n in tons){
        console.log(tons[n])
    }
}
function criar_escala(){
    if(tom_escolhido == 'C'){
        console.log(`A Escala mais comum para o tom ${tons[0]} eh ${escalas[0]}`) 
    }else{
        console.log(`Ainda nao ha escala para ${tom_escolhido}`)
    }
}
criar_escala()
apresenta_esc_pr()