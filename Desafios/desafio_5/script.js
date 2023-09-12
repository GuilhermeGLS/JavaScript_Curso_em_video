let num = document.querySelector('input#fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

// essa função irá dizer se o numero digitado pelo usuario estar dentro dos paramentros sendo de 1 a 100
function isnumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

// essa função dirá se é um numero invalido. Ou já presente dentro da lista ou seja um numero ja digitado pelo usuario
function islista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}



function adicionar(){
    if (isnumero(num.value) && !islista(num.value, valores)){
        // adicionando umero dentro da array <(variavel).push>
         valores.push(Number(num.value))
        //  adicionando um elemento
         let item = document.createElement('option')
         item.text = `valor ${num.value} adicionado`
         lista.appendChild(item)
         res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    // Assim queb o valor é colocado o espaço para se colocar mais valores se apaga automaticamente
    num.value = ''
    /*assim que o valor for colocado o focu do mouse volta para o espaço de colocar mais valores
    não precisando clicar de novo na caixa para digitar*/
    num.focus()
}

function finalizar() {
    if (valores.length === 0) {
        window.alert('Adicione os valores antes de finalizar.');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        
        for (let pos in valores) {
            let valor = valores[pos];
            soma += valor;

            if (valor > maior) {
                maior = valor;
            }

            if (valor < menor) {
                menor = valor;
            }
        }

        media = soma / tot;
        
        res.innerHTML = ''; // Limpa o conteúdo atual da div

        // Concatena as mensagens
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`;
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}</p>`;
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}</p>`;
        res.innerHTML += `<p>Somando os valores temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores cadastrados é ${media}.</p>`;
    }
}

    

    