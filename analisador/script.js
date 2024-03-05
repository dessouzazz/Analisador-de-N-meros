const x= []

function add(){
    let n = Number(document.getElementById('txtn').value)
    let resposta = document.getElementById('res')
    var todos = document.getElementById('todos')
    var maior = document.getElementById('maior')
    var menor = document.getElementById('menor')
    var soma = document.getElementById('soma')
    var media = document.getElementById('media')

    let resultado = document.getElementById('resultado')
    
    //resposta.innerHTML += `<option value="${n}">valor ${n} adicionado.</option>`

        if (!x.includes(n)){
            x.push(n)
            resposta.innerHTML += `<option value="${n}">valor ${n} adicionado.</option>`

        }else {
            window.alert('ERRO, o valor não pode ser inserido')
        }

        todos.innerHTML = `Ao todo, temos ${x.length} números cadastrados`

        maior.innerHTML = `O maior valor informado foi ${Math.max(...x)}`

        menor.innerHTML = `O menor valor informado foi ${Math.min(...x)}`

        var sum = 0
        for(var i =0; i<x.length; i++){
            sum+=x[i];
         }

        soma.innerHTML = `Somando todos os valores, temos ${sum}`

        media.innerHTML = `A média dos valores digitados é ${sum/x.length.toFixed(3)}.`

        


}