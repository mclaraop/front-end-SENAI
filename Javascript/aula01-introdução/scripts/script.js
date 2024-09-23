function explicacao(){
    //comando para retornar um valor no console
    console.log('Hello World');

    //cria uma variavel com seu respectivo nome
    var teste 

    // = é atribuição
    //teste = "Fazendo teste"

    //alert - retorna uma mensagem
    //alert("Estou vivo!");

    //prompt - retorna uma mensagem com um input, e seu retorno é de string
    //teste = prompt("Qual é o seu nome?");

    //confirm - retorna uma mensagem, e seu retorno é de valor boolean(lógico)
    //teste = confirm("Deseja receber notificações?");

    // variavel tipo Number
    //teste = 100

    //variavel tipo Object
    //teste = []

    //typeof() = verifica o tipo da variavel
    console.log(typeof(teste))

    //TIPOS DE VARIAVEL
    //escopo global e sobrescrevivel
    var nome = "Maria Clara"
    //escopo local e sobrescrevivel
    function teste(){
        let sobrenome = "Oliveira"
        console.log(sobrenome)
    }

    //escopo global mas não sobrescrevivel
    const numero = 100
}

