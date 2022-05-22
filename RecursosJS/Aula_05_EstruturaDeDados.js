//Uma estrutura de Dados é uma estrutura que vai juntar vários dados. O mais comum seriamos pensar em vetores, que em inglês chamamos Arrays. No caso do JavaScript temos os Arrays que podem ser simples ou multidimensionais (matrizes) e podem ter vários tipos de dados. Mas cada linguagem terá as suas  Estrutura de Dados. O importante é saber que o Array, não é um tipo de Dado e sim uma Estrutura e o que diferencia os dois é pensar nisso. Um tipo de Dado, é o que chamamos dados primitivos, os mais básicos possíveis. Já uma Estrutura vai conter vários destes dados primitivos seguindo algum tipo de regra. Outra Estrutura de Dados é o Objeto por exemplo, que vamos ver depois que é criado com uma classe, que é ao mesmo tempo um tipo de dado e uma estrutura de dados.

//Um vetor ou array simples
let souUmArray = ["Um Array", "Tem muitos elementos", "E dependendo da linguagem", "podem ser elementos do mesmo tipo", "ou de tipos diferentes", true, 2];

//Uma matriz ou array multidimensional
let umArrayMulti = [
    [1,2],
    ["Novo Array", "Dentro do Array", true]
];

//console.log(souUmArray);
//souUmArray.push("Novo elemento");

let meuString = "Meu string";

console.log(souUmArray[1]);
console.log(umArrayMulti[1][2]);
console.log(meuString[2]);