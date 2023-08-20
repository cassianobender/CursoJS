//window.alert('Hi')
function contar(){

    var b = window.document.getElementById('begin')
    valorb = Number(b.value)
    //var b = 1
    var e = window.document.getElementById('end')
    valore = Number(e.value)
    //var e = 10
    var s = window.document.getElementById('step')
    valors = Number(s.value)
    //var s = 2
    var cont = window.document.getElementById('cont')
    var txt = window.document.getElementById('txt')
    cont.innerHTML = ''
    txt.innerHTML = 'Contando:'
    ///*
    for(t=valorb;t<=valore;t+=valors)
    {
    //window.alert(t)
    cont.innerHTML += ` ${t} &#128073 `
    }
    cont.innerHTML += '&#127937'
    //div2.appendChild(res)
    //*/
}