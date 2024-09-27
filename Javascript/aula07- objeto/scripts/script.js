class Cliente{
    nome;
    cpf;
    nConta;
    email;
    saldo;
    credito;
    fazerCompra(valor) {
        if (this.saldo >= valor) {
            this.saldo = this.saldo - valor
            return "Compra efetuada com sucesso!"
        }else{
            return "Saldo insuficiente!"
        }
    }
    transferir(valor, remetente){
        if(this.saldo >= valor){
            this.saldo = this.saldo - valor
            return `O valor de R$ ${valor} foi tranferido para o usuário ${remetente}`
        }else{
            return "A transferencia não pode ser efetuado! Saldo insuficiente"
        }
    
    }
    receber(valor, cliente){
        this.saldo = this.saldo + valor
        return `O valor de R$ ${valor} foi recebido do usuário ${cliente}`
    } 
}

var cliente1 = new Cliente();
console.log(cliente1)
cliente1.nome = "Maria"
cliente1.cpf = "049.024.011-93"
cliente1.nConta = "001"
cliente1.email = "mclaraop@icloud.com"
cliente1.saldo = 0
cliente1.credito = 2000




//console.log(cliente1.fazerCompra(2500))
//alert(cliente1.fazerCompra(2500))