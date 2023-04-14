function carregar(){
    var mensagem = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if (hora >= 0 && hora < 12){ 
        img.src='imagens/manha.jpg'
        document.body.style.background='#e2cd9f'
        mensagem.innerHTML = `Bom dia! agora são ${hora} horas e ${minutos} minutos.`
    }else if(hora >= 12 && hora <= 18){
        img.src='imagens/tarde.jpg'
        document.body.style.background='#b9846f'
        mensagem.innerHTML = `Boa Tarde! agora são ${hora} horas e ${minutos} minutos.`
    }else {
        img.src='imagens/noite.jpg'
        document.body.style.background='#515154'
        mensagem.innerHTML = `Boa Noite! agora são ${hora} horas e ${minutos} minutos.`
    }
}
