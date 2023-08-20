//window.alert('Hi')
function gerar(){
var valor = window.document.getElementById('num')
var vlr = Number(valor.value)
var div2 = window.document.getElementById('Div2')
var select = document.getElementById('tabuada')
div2.innerHTML = ''
select.innerHTML = ''
for(c;c<=10;c++){
    //div2.innerHTML += `${c} x ${vlr} = ${c*vlr}`
    var option = document.createElement('option')
    option.value = `${c}`
    option.text = `${c} x ${vlr} = ${c*vlr}`
    select.appendChild(option)

}

}
