//Variaveis são um local de memória onde um dado que pode ser alterado será guardado

let souUmaVariavel = "Sou uma variavel com um string";
console.log(souUmaVariavel);
console.log(typeof souUmaVariavel);

//Como o JS não é fortemente tipada posso trocar o tipo de dado sem problemas. Já não posso fazer isso em Java, por exemplo.
souUmaVariavel = 2;
console.log(souUmaVariavel);
console.log(typeof souUmaVariavel);

//Constantes são um local de memória onde um dado que não pode ser alterado será guardado
const SOU_UMA_CONSTANTE = "Miha constante";

console.log(SOU_UMA_CONSTANTE);

//Agora vai dar erro pois não posso alterar uma constante
SOU_UMA_CONSTANTE = 2;
