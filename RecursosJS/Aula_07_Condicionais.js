//Estruturas de controle - Condicionais

let a = 2;
let b = 4;
let c = "2";

if (a == b) {
    console.log("a é igual a b");
} else if (a === c) {
    console.log("a não é igual a b mas é igual a c");
} else {
    console.log("a não é igual a b nem c");
}

switch (a) {
    case 0 :
        console.log("a é igual a 0");
        break;
    case 1:
        console.log("a é igual a 1");
        break;
    case 2:
        console.log("a é igual a 2");
        break;
    default:
        console.log("a não é nenhuma das opções");

}