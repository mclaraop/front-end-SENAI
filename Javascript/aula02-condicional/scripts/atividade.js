//1 - Crie uma aplicação capaz de identificar a faixa etária com
//base na idade informada pelo usuário. Considere os seguintes critérios:
//Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”.
//Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”.
//Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”.
//Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”.
//Fique à vontade para utilizar qualquer uma das funções aprendidas para exibição de dados para o usuário

function atividade1() {
    let idade = Number(prompt("Qual é a idade?"))

    if (idade >= 0 && idade < 15){
        alert ("Criança")
    }else if (idade >= 15 && idade < 30){
        alert ("Jovem")
    }else if (idade >= 30 && idade < 60){
        alert ("Adulto")
    }else if (idade >= 60){
        alert ("Idoso")
    }else{
        alert ("Idade inválida")
    }
}

//2- Fazer uma calculadora com os 4 operadores básicos (+,-,*,/) para rodar no javascript

function atividade2(){
    
}
