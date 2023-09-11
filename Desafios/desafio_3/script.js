function contar(){
    let cont_i = document.getElementById('inicio')
    let cont_f = document.getElementById('fim')
    let cont_p = document.getElementById('passo')
    let res = document.getElementById('res')

    if(cont_i.value.length === 0 || cont_f.value.length === 0 || cont_p.value.length === 0){
        window.alert(`[ERROR] Faltam Dados!`)
    }
    else{
        res.innerText = 'Contando: '
        let i = Number(cont_i.value)
        let f = Number(cont_f.value)
        let p = Number(cont_p.value)

        if(i<f){
            for(let c = 0; c <= f; c += p){
                res.innerHTML += `${c} `
            } 
        }
        else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
    }
}