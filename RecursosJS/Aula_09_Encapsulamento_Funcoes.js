//Função com retorno
function minhaPrimeiraFuncao(primeiroParametro, segundoParametro){

    return primeiroParametro + segundoParametro;
}

//Função sem retorno
function minhaSegundaFuncao(a,b){

    console.log("Adicionando os parâmetros temos: " + minhaPrimeiraFuncao(a,b));

}

//Uma função nque mostra precedência de operadores
function precedenciaDeOperadores(primeiroParametro, segundoParametro){
    console.log("Adicionando os parâmetros com precedência temos: " + (primeiroParametro + segundoParametro));
}


//Agora posso repetir as função quantes vezes quiser no meu código com valores diferentes

minhaSegundaFuncao(2,5);
minhaSegundaFuncao(4,8);
precedenciaDeOperadores(7, 11);
precedenciaDeOperadores(10,10);
