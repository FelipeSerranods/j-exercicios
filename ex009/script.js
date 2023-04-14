function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('rad_sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <=12){
                //Criança
                img.setAttribute('src','imagens/menino.jpg')
            }else if (idade < 18){
                //Jovem
                img.setAttribute('src','imagens/homem-jovem.jpg')
            }else if(idade <= 50){
                //Adulto
                img.setAttribute('src','imagens/homem.jpg')
            }else{
                //Idoso
                img.setAttribute('src','imagens/idoso.jpg')
            }       
        }else{
            genero ='Femenino'
            if (idade >=0 && idade <=12){
                //Criança
                img.setAttribute('src','imagens/menina.jpg')
            }else if (idade < 18){
                //Jovem
                img.setAttribute('src','imagens/mulher-jovem.jpg')
            }else if(idade <= 50){
                //Adulto
                img.setAttribute('src','imagens/mulher.jpg')
            }else{
                //Idoso
                img.setAttribute('src','imagens/idosa.jpg')
            }   
        }
        res.innerHTML = `Dectamos ${genero} com ${idade} anos !`
        res.appendChild(img)
    }
}