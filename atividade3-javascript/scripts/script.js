// 1 - Faça uma listagem de 6 filmes de sua escolha com array e faça eles serem impressos no html

function ex1(){
    var filmes = ['O impossível', 'Meu porto seguro', 'É assim que acaba', 'A nova Cinderela']

    filmes.forEach(listaFilme => {
        document.querySelector("#respostaEx1").innerHTML += `
        <p> ${listaFilme} </p>
        `
    });
}

// 2 - Fazer a tabuada com repetições recebendo os valores pelos inputs

function ex2(){
    let numero = Number (document.getElementById("inputEx2").value) 

    let contador = 0
    while(contador <= 10){
        
        contador++
        let calculo = numero * contador

        document.getElementById("respostaEx2").innerHTML += `
            <p> ${numero} x ${contador} = ${calculo} </p>     
        `
    }
}