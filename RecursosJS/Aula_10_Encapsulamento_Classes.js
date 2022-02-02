class Pessoa{
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    apresentando(){
        console.log(`Sou ${this.nome} ${this.sobrenome} e tenho ${this.idade}`);
    }

}

let adriana = new Pessoa("Adriana", "Cerdeira", 20);
adriana.apresentando();
