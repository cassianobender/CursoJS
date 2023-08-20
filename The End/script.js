//window.alert('Hi')
var b_add = window.document.getElementById('num')
var list = window.document.getElementById('l1')
var o1 = window.document.getElementById('o1')
var p1 = window.document.getElementById('p1')
var div2 = window.document.getElementById('div2')
var dados = []
function add ()
{
    if(b_add.value>0 && b_add.value <=100){
    o1.remove()
    
    //window.alert(`Valido ${b_add.value}`)
    var option = document.createElement('option')
    option.value = 'v1'
    option.text = `Valor ${b_add.value} Adicionado`
    list.appendChild(option)
    p1.remove()
    div2.innerHTML=''
    var inf1 = document.createElement('p')
    inf1.textContent = `Ao todo temos numeros cadastrados`
    var inf2 = document.createElement('p')
    inf2.textContent = `O maior valor informado foi `
    var inf3 = document.createElement('p')
    inf3.textContent = `O menor valor informado foi `
    var inf4 = document.createElement('p')
    inf4.textContent = `Somando todos os valores, temos `
    var inf5 = document.createElement('p')
    inf5.textContent = `A media dos valores digitados e `
    div2.appendChild(inf1)
    div2.appendChild(inf2)
    div2.appendChild(inf3)
    div2.appendChild(inf4)
    div2.appendChild(inf5)
    }
    else{
    window.alert(`Valor invalido`)
    }
}
