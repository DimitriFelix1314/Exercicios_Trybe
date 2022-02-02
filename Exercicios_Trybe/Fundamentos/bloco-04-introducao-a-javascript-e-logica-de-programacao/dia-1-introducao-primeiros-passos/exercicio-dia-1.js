//1

// const a = 8;
// const b = 10;

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

//2

// const primeira= 5;
// const segunda= 6;

// if (segunda > primeira) {
//     console.log("a é maior");
// } else {
//     console.log("b é maior");
// }

//3

// const Joyce=1.50;
// const Diana=1.05
// const Davi=1.20;

// if (Joyce > Diana && Joyce > Davi) {
//     console.log("Joyce é maior");
// } else if (Diana > Joyce && Diana > Davi) {
//     console.log("Diana é maior");
// } else {
//     console.log("Davi é maior");
// }

//4

// const Dimitri = 1.90;

// if (Dimitri > 0.00){
//     console.log("positive");
// } else if (Dimitri  < 0.00) {
//     console.log("negative");
// } else {
//     console.log("zero");
// }

//5

// const anguloUm = 60;
// const anguloDois = 40;
// const anguloTres = 60;

// if (anguloUm + anguloDois + anguloTres == 180) {
//     console.log("true");
// } else {
//     console.log("false");
// }

//6

// let rei  = "diagonal"&&"frEnte"&&"atRas"&&"lateral";
// let result = rei.toLowerCase();

// if (result = "diagonal"&&"frente"&&"atras"&&"lateral") {
//     console.log(result);
// }else{
//     console.log("Erro, essa peça não faz esse comando");
// }


//7

// let nota = -10;

// if (nota >= 90){
//     console.log("Sua nota é A");
// } else if( nota >= 80){
//     console.log("Sua nota é B");
// } else if( nota >= 70){
//     console.log("Sua nota é C");
// } else if( nota >= 60){
//     console.log("Sua nota é D");
// } else if( nota >= 50){
//     console.log("Sua nota é E");
// } else if( nota < 50 & nota >= 0){
//     console.log("Sua nota é F");
// } else if( nota < 0 || nota > 100){
//     console.log("Erro!");
// }

//8

// const numero = 3;
// const numerodois= 1;
// const numerotres= 5;

// if (numero%2 === 1 || numerodois/1 === 0 || numerotres/3 === 2) {
//     console.log(true);
// } else {
//     console.log(false)
// }

//9

// const numero = 3;
// const numerodois = 5;
// const numerotres = 7;

// if (numero||numerodois||numerotres/2 === 1) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//10

// const product_cost = 900;
// const sale_price = 1200;

// const tax = 0.2;
// const sold_itens_number = 1000;

// if (product_cost < 0 || sale_price < 0) {
//   console.log('Invalid input');
// } else {
//   const tax_cost = product_cost * tax;
//   const profit_per_sale = sale_price - (product_cost + tax_cost);
//   console.log(`${sold_itens_number} products sale profit: ${ sold_itens_number * profit_per_sale }`);
// }

//11


const gross_salary = 3000;


// INSS

let inss_aliquot = null;

if (gross_salary <= 1556.94) { // Salário bruto até R$ 1.556,94: alíquota de 8%
  inss_aliquot = gross_salary * 0.08;
} else if (gross_salary <= 2594.92) { // Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
  inss_aliquot = gross_salary * 0.09;
} else if (gross_salary <= 5189.82) { // Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
  inss_aliquot = gross_salary * 0.11;
} else { // Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
  inss_aliquot = 570.88;
}

// FIM INSS

const base_salary = gross_salary - inss_aliquot;

// IR

let ir_aliquot = null;
let tax_deduction = null;

if (base_salary <= 1903.98) { // Até R$ 1.903,98: isento de imposto de renda
  ir_aliquot = 0;
  tax_deduction = 0;
} else if (base_salary <= 2826.65) { // De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
  ir_aliquot = base_salary * 0.075;
  tax_deduction = 142.80;
} else if (base_salary <= 3750.05) { // De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
  ir_aliquot = base_salary * 0.15;
  tax_deduction = 354.80;
} else if (base_salary <= 4664.68) { // De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
  ir_aliquot = base_salary * 0.225;
  tax_deduction = 636.13;
} else { // Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
  ir_aliquot = base_salary * 0.275;
  tax_deduction = 869.36;
}

// FIM IR

const net_salary = base_salary - (ir_aliquot - tax_deduction);

console.log(`Net salary = ${net_salary}`);