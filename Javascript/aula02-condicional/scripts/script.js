var vTotal = null

function explicacao(){
    // se () senao fimSe
    if(true){
        console.log("ESTOU NO IF")
    }else{
        console.log("ESTOU NO ELSE")
    }

    let idade = Number(prompt("Qual é a idade?"))

    if(idade < 18){
        alert("Entrada não permitida")
        location.href = "https://www.google.com"
    }else{
        alert("Entrada permitida!")
        location.reload()
    }
}

function explicacao2(){
    const emailAdm = "adm@gmail.com"
    const senhaAdm = "123"

    alert("Seja bem vindo ao sistemaSenai!")
    let email = prompt("Digite o email")
    let senha = prompt("Digite a senha")


    // = atribuição
    // == comparação de conteudo
    // === comparação de conteudo e tipo
    // != não igual (diferente)
    // & (equivalente ao e)
    // || (equivalente ao ou)
    if(email === emailAdm & senha === senhaAdm){
        alert("Você é adm")
    }else{
        alert("Usuario ou senha incorretos! Tente novamente!")

        let repete = confirm("Deseja tenta novamente?")

        if (repete) {
            explicacao2()
        }

    }
}

function explicacao3(){
    alert("Seja bem vindo ")
    let opcao = prompt("A) Camisa , B) Calça , C) Sapato")
    // escolha (opcao) caso "a"
    switch(opcao){
        case "A":
            alert("Você escolheu Camisa")
            break
        case "B":
            alert("Você escolheu Calça")
            break
        case "C":
            alert("Você escolheu Sapato")
            break
        default:
            alert("Opção inválida!")

            let repete = confirm("Deseja tentar novamente?")

            if (repete){
                explicacao3()
            }
    }
}