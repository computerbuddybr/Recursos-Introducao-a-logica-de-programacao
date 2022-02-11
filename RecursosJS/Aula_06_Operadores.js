let a = 2;
let b = 2;
let d = "2";

//Operadores Aritméticos
console.log("Operadores Aritméticos: ");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);



//Operadores de Incremento e Decremento
console.log("Operadores Incremento e Decremento: ");
console.log(a++);
console.log(a);
console.log(a--);
console.log(++a);

//Operadores de Atribuição
console.log("Operadores de Atribuição: ");
let c = a + b;
console.log(c);
a +=b;
console.log(a);

//Operadores de Comparação
console.log("Operadores de Comparação: ");
console.log(a < b);
console.log(a <= b);
console.log(b == d);
console.log(b === d);
console.log(a != b);


//Operador Condicional (Ternário)
console.log("Operadores Ternário: ");
console.log(a < b ? "Sim" : "Não");

//Operadores lógicos (E, OU, NEGAÇÃO)
console.log("Operadores Lógicos: ");
console.log(a > b & b == d);
console.log(a < b | b == d);
console.log(!false);

//Precedência de operadores
console.log("Precedência de Operadores: ");
console.log(a + b * 2);
console.log((a + b) * 2);
console.log(a > b & b == d & b === 2);
console.log(a < b | b == d | b === 2);