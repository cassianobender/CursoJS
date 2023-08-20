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
    dados.push(b_add.value)
    const mv = Math.max(...dados)
    const nimv = Math.min(...dados)
    var soma = dados.reduce((total, valor) => total + valor, 0)
    const avg = Math
    //window.alert(soma)
    var option = document.createElement('option')
    option.value = 'v1'
    option.text = `Valor ${b_add.value} Adicionado`
    p1.remove()
    list.appendChild(option)
    div2.innerHTML =''    
    var inf0 = document.createElement('p')
    inf0.textContent = `Ao todo temos ${dados.length} numeros cadastrados`
    var inf1 = document.createElement('p')
    inf1.textContent = `O maior valor informado foi ${mv}`
    var inf2 = document.createElement('p')
    inf2.textContent = `O menor valor informado foi ${nimv}`
    var inf3 = document.createElement('p')
    inf3.textContent = `Somando todos os valores, temos ${soma} `
    var inf4 = document.createElement('p')
    inf4.textContent = `A media dos valores digitados e `
    var inf = [inf0,inf1,inf2,inf3,inf4]
    for(let num in inf){
        div2.appendChild(inf[num])   
    }   
} else{
        window.alert(`Valor invalido`)
}
}