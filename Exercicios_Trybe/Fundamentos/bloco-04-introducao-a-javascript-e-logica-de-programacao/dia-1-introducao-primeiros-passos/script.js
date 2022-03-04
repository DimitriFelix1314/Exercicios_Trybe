// // Exércicio 1
// const a = 10;
// const b = 5;

// console.log('Soma: ' + (a + b));
// console.log('Subtração: ' + (a - b));
// console.log('Multiplicação: ' + (a * b));
// console.log('Divisão: ' + (a / b));
// console.log('Módulo: ' + (a % b));

// // Exércicio 2
// const a = 20;
// const b = 21;

// if (a > b) {
//   console.log("'a' é maior que 'b'");
// } else {
//   console.log("'b' é maior que 'a'");
// };

// Exércicio 3

// const a = 36;
// const b = 25;
// const c = 47;

// if (a > b && a > c) {
//   console.log(a + " é maior do que " + b + " e " + c);
// } else if (b > a && b > c) {
//   console.log(b + " é maior do que " + b + " e " + c);
// } else if (c > a && c > b) {
//   console.log(c + " é maior do que " + b + " e " + a);
// } else {
//   console.log("Todos os numeros são iguais");
// }

// Exercicio 4

// const value = 0;

// if (value > 0) {
//   console.log("Positive");
// } else if (value < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

// Exercicio 5

// const a = 60;
// const b = 60;
// const c = 60;

// if (a < 0 || b < 0 || c < 0) {
//   console.log("Inválido")
// } else if (a + b + c === 180) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Exercicio 6

const chessPiece = 'Bishop';

switch (chessPiece.toLowerCase()) {
  case 'king':
    console.log('Rei-> All direction with one step.');
    break;
  case 'bishoo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'queen':
    console.log('Rainha-> All directions.');
    break;
  case 'knight':
    console.log('Cavalo -> "L" in shape.');
    break;
  case 'rook':
    console.log('Torre -> Horizontally e Vertically.');
    break;
  case 'pawn':
    console.log("Peão -> Just forward, at the first moviment it may does 2 steps.");
    break;
  default:
    console.log('Error, there is no ' + chessPiece + '!');
    break;
};