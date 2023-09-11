function carregar(){
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('img')
let txt = window.document.getElementById('txt')
let data = new Date()
let hora = data.getHours();
let min = data.getMinutes()

msg.innerHTML = `agora são ${hora}:${min} Horas.`
if( hora >= 0 && hora < 12){
    txt.innerHTML = `Bom Dia!`
    img.src = 'asserts/fotomanha.jpg'
    document.body.style.background = '#e2cd9f'
}
else if (hora >= 12 && hora < 18){
    txt.innerHTML = `Boa Tarde!`
    img.src = 'asserts/fototarde.jpg'
    document.body.style.background = '#b9846f'
}

else{
    txt.innerHTML = `Boa Noite!`
    img.src = 'asserts/fotonoite.jpg'
    document.body.style.background = '#515154'
}

}