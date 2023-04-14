var num = document.getElementById('txtnumber')
var tab = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value)&& !inLista(num.value,valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O valor ${num.value} adicionado.`
        tab.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('[ERRO] Valor inválido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        alert('[ERRO] Adicione valores antes de finalizar.')
    }else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var poss in valores){
            soma += valores[poss]
            if(valores[poss] > maior)
                maior = valores[poss]
            if(valores[poss] < menor)
                menor = valores[poss]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi de ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi de ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é de ${media}.</p>`
    }
}




    
    
