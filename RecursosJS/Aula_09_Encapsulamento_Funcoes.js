//Função com retorno
let a = 20;
function dobrar(){
    a *= 2;
}
dobrar();
dobrar();
console.log(a);

/**
 * Exemplo de primeira função
 * @param primeiroParametro
 * @param segundoParametro
 * @returns {string|number}
 */

function minhaPrimeiraFuncao(primeiroParametro, segundoParametro){
    meuNomeLocal = "Local";
    console.log(meuNomeLocal);
    if(primeiroParametro == 4){
        return "Oopsie";
    }
    console.log("Primeiro paramêtro: " + primeiroParametro);
    console.log("Segundo paramêtro: " + segundoParametro);

    return primeiroParametro * segundoParametro;
    console.log("depois do return");
}
minhaPrimeiraFuncao(2,5);
//console.log(meuNomeLocal);
//Função sem retorno
function minhaSegundaFuncao(a,b){

    console.log("Adicionando os parâmetros temos: " + minhaPrimeiraFuncao(b,a));

}

//Uma função que mostra precedência de operadores
function precedenciaDeOperadores(primeiroParametro, segundoParametro){
    console.log("Multiplicando os parâmetros com precedência temos: " + (primeiroParametro * segundoParametro));
}

//Função com funcção como parametro
function imprimir(minhaFuncao){
    console.log(minhaFuncao);
}
function rodarFuncao(funcao){
    console.log(funcao(2,3));
}

function soma(a,b){
    return a + b;
}
// rodarFuncao(soma);
// imprimir(soma(2,5));
//
// //Agora posso repetir as função quantas vezes quiser no meu código com valores diferentes
//
// //Atribuindo o valor do retorno a uma variável
// let minhaVar = minhaPrimeiraFuncao(2,3);
// console.log(minhaVar);
//
// //Neste caso estou dando uma função como argumento para o meu método log, que nada mais é do que uma função do objeto console. Aqui é importante entender que o que será fornecido ao método log será o retorno da função minhaPrimeiraFuncao
// console.log(minhaPrimeiraFuncao(minhaVar, minhaVar));
//
// console.log(minhaVar);

//Simplesmente chamando funções
minhaSegundaFuncao(2,5);
minhaSegundaFuncao(4,8);
precedenciaDeOperadores(7, 11);
precedenciaDeOperadores(10,10);
