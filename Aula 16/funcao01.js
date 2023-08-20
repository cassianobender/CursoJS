function parimpar(n=0){
    if(n%2==0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

console.log(parimpar(23))//chama diretamente pela chamada
var res = parimpar(2)// a chamada vira uma variavel
console.log(res)//chamada pela variavel