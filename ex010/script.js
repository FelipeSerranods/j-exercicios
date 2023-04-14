function contar(){
    var i = document.getElementById('ini')
    var f = document.getElementById('fim')
    var p = document.getElementById('pass')
    var res = document.getElementById('res')
    
    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0 ){
        res.innerHTML ='Impossível contar! '
    }
    else{ 
        res.innerHTML = 'Contando: <br>'
        var n1 = Number(i.value) 
        var n2 = Number(f.value) 
        var n3 = Number(p.value)
        if (n3 <= 0){
            alert('Passo inválido! Considerando passo igual a 1!')
            n3 = 1
        }
        if (n1 < n2){
            for (var c = n1 ; c <= n2; c += n3){
                res.innerHTML += `${c} `
            }
        }
        else{
            for(var c = n1 ; c >= n2; c -= n3){
                res.innerHTML += `${c} `
            }
        }
    }
}