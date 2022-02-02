class Identidade {
    constructor(identidade) {
        this.identidade = identidade;
    }
}

class Pessoa {

    constructor(nome, sobrenome, idade, num) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.identidade = new Identidade(num);
    }

    apresentando() {
        console.log(`Sou ${this.nome} ${this.sobrenome} e tenho ${this.idade}`);
    }

}


let adriana = new Pessoa("Adriana", "Cerdeira", 20, 2222);
adriana.apresentando();
console.log(adriana);

let paula = new Pessoa("Paula", "Souza", 35, 4444);
console.log(paula);

console.log(adriana.identidade.identidade);
