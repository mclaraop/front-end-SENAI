var clientes = []

class Cliente{
    constructor(nome, cpf, nConta, email, credito){
        this.nome = nome;
        this.cpf = cpf;
        this.nConta = nConta;
        this.email = email;
        this.saldo = 0;
        this.credito = credito;
        this.fazerCompra = function(valor){}
        this.transferir = function(valor, remetente){}
        this.receber = function(valor, cliente){}
    }
}

//clientes.push(new Cliente('Maria Clara', '04902401193', '001', 'mclaraop@icloud.com', '1000'))

//clientes.push(new Cliente('Lígia', '04902401193', '002', 'ligia@icloud.com', '1000'))
//console.log(cliente1)

function mostrarClientes(){
    document.querySelector("#lista").innerHTML = ``
    clientes.forEach(cadaCliente => {
        document.querySelector("#lista").innerHTML += `
        <div class="cliente">
            <p> ${cadaCliente.nome} </p>
            <p> ${cadaCliente.cpf} </p>
            <p> ${cadaCliente.email} </p>
        </div>   
        `
    });
}

function cadastrarCliente(){
    let nome = document.querySelector("#nome").value
    let cpf = document.querySelector("#cpf").value
    let nConta = document.querySelector("#nConta").value
    let email = document.querySelector("#email").value
    let credito = document.querySelector("#credito").value

    clientes.push(new Cliente(nome, cpf, nConta, email, credito))

    mostrarClientes()
}

document.querySelector("#cadastrar").addEventListener('click', cadastrarCliente)