var valores = []
var valor_inf = window.document.getElementById('num')
var div2 = window.document.getElementById('div2')
var select = window.document.getElementById('select') 
var option_inicial = window.document.getElementById('o1')
var txt_aguardando = window.document.getElementById('p1')    
    function add(){
        option_inicial.remove()
        var num = Number(valor_inf.value)
        if(num<0 || num>100){
            window.alert('Numero Invalido')
        }else if(valores.includes(num)){
            window.alert('Valor ja existente')
        }else{
            valores.push(num)
        //window.alert(valores)
        option_create = document.createElement('option')
        option_create.value = 'v1'
        option_create.text = `Numero ${num} Adicionado`
        select.appendChild(option_create)
        //div2.innerHTML = valores
    }
    valor_inf.value = ''
    valor_inf.focus()
    }
    function Finalizar(){
        txt_aguardando.innerHTML=''
        txt_aguardando.innerHTML+=`Ao todo temos ${valores.length} numeros cadastrados <br>`
        txt_aguardando.innerHTML+=`O maior valor eh ${Math.max(...valores)} <br>`
        txt_aguardando.innerHTML+=`O menor valor eh ${Math.min(...valores)} <br>`
        var soma = 0
        for (let n in valores){
            soma += valores[n]
        }
        txt_aguardando.innerHTML+=`A soma dos valores ${soma} <br>`
        txt_aguardando.innerHTML+=`A media dos valores ${soma/valores.length} <br>`
    }   
    
