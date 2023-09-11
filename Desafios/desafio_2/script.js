function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano ){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }
    else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        // adicionando imagem pelo propio JS
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = `homem`
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'asserts/foto-criança.jpg')
            }
            else if (idade >= 10 && idade < 21){
                // jovem
                img.setAttribute('src', 'asserts/foto-jovem.jpg')
            }
            else if (idade >= 21 && idade < 50){
                // Adulto
                img.setAttribute('src', 'asserts/foto-adulto.jpg')
            }
            else{
                // idoso
                img.setAttribute('src', 'asserts/foto-idoso.jpg')
            }
        }
        else if (fsex[1].checked){
            genero = `Mulher`
            if (idade >= 0 && idade < 10){
                // criança
                function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano ){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }
    else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        // adicionando imagem pelo propio JS
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = `homem`
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'asserts/foto-crianca.jpg')
            }
            else if (idade >= 10 && idade < 21){
                // jovem
                img.setAttribute('src', 'asserts/foto-jovem.jpg')
            }
            else if (idade >= 21 && idade < 50){
                // Adulto
                img.setAttribute('src', 'asserts/foto-adulto.jpg')
            }
            else{
                // idoso
                img.setAttribute('src', 'asserts/foto-idoso.jpg')
            }
        }
        else if (fsex[1].checked){
            genero = `Mulher`
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'asserts/foto-fm-crianca.jpg')
            }
            else if (idade >= 10 && idade < 21){
                // jovem
                img.setAttribute('src', 'asserts/foto-fm-jovem.jpg')
            }
            else if (idade >= 21 && idade < 50){
                // Adulto
                img.setAttribute('src', 'asserts/foto-fm-adulta.jpg')
            }
            else{
                // idoso
                img.setAttribute('src', 'asserts/foto-fm-idosa:jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos` 
    }
}
            }
            else if (idade >= 10 && idade < 21){
                // jovem
            }
            else if (idade >= 21 && idade < 50){
                // Adulto
            }
            else{
                // idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos` 
        res.appendChild(img  )
    }
}