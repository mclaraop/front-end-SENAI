/* 
1 passo = entrada de dados
    primeiroN, segundoN, operador

2 passo = calculo
    - Qual operador escolhido
    - Fazer o calculo
    - Salvar o resultado
        - Se resetar zera variaveis
    
3 passo = saida de dados
    - Resultado no alert
*/

var num1;
var num2;
var operador;
var resultado;

function botaoN(botao){
    if (num1 != undefined){
        num2 = Number(botao)
        }else{
            num1 = Number(botao)
        }

    }

function botaoOperador(botao){
    operador = botao
}

function calcular(){
    switch(operador){
        case "+":
            resultado = num1 + num2
            alert(` ${num1} ${operador }${num2} = ${resultado}`)
        break

        case "-":
            resultado = num1 - num2
            alert(` ${num1} ${operador }${num2} = ${resultado}`)
        break

        case "*":
            resultado = num1 * num2
            alert(` ${num1} ${operador }${num2} = ${resultado}`)
        break

        case "/":
            resultado = num1 / num2
            alert(` ${num1} ${operador }${num2} = ${resultado}`)
        break
        default:
            alert("Selecione uma operação!")
        break
    }
}

function resetar(){
    num1 = undefined
    num2 = undefined
    operador = undefined
}