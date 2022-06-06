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
        //Aqui criamos um objeto da classe Identidade como uma propriedade da classe Pessoa
        this.identidade = new Identidade(num);
    }

    apresentando() {
        console.log(`Sou ${this.nome} ${this.sobrenome} e tenho ${this.idade}`);
    }


}

//Herança
class Aluno extends Pessoa{
    constructor(nome, sobrenome, idade, num, curso, ano){
        super(nome, sobrenome, idade, num);
        this.curso = curso;
        this.ano = ano;
    }
    quemSou(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} tenho ${this.idade}, estou cursando ${this.curso}, e estou no ${this.ano} ano e meu id é ${this.identidade.identidade}`);
    }
}


let adriana = new Pessoa("Adriana", "Cerdeira", 20, 2222);
adriana.apresentando();
console.log(adriana);

let paula = new Pessoa("Paula", "Souza", 35, 4444);
console.log(paula);

console.log(adriana.identidade.identidade);

let max = new Aluno("Max", "Silva", 22, 4444, "Engenharia da Computação", "Terceiro");

//Agora por herança este objeto tem acesso aos métodos e propriedades da Classe Pessoa
max.apresentando();
max.quemSou();
