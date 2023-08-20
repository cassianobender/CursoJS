//Na Legislacao brasileira a votacao obrigatoria eh com 18 anos,
//opcional com 16 e acima de 65 anos.
//proibida para menores de 16

var idade = 18
var agora = new Date()
var hora = agora.getHours()
console.log(`A sua idade no dia ${agora.toLocaleString()} eh ${idade}`)
if(idade < 16){
    console.log(`Nao tem idade para votar ainda`)
}
else if (idade == 16 || idade > 65){
    console.log(`Voto Opcional`)
}
else{
    console.log(`Voto Obrigatorio`)
}

