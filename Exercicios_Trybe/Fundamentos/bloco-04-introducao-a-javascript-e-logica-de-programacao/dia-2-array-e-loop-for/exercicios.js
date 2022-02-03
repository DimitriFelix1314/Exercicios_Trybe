//exercicios 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (index = 0; index < numbers.length; index +=1) {
//     console.log(numbers[index]);
// }

//exercicios 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let i=0; i<numbers.length; i+=1) {
//     sum += numbers[i];
// }
// console.log(sum);

//exercicios 3

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let i=0; i<numbers.length; i+=1){
//     sum += numbers[i];
// }
// console.log(sum/numbers.length);


// //exercicios 4

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let i=0; i<numbers.length; i+=1){
//     sum += numbers[i];
// }
// let average=sum/numbers.length;
// console.log(average);

// if (average>20){
//     console.log("valor maior que vinte");
// } else {
//     console.log("valor menor ou igual a vinte;")
// }

// //exercicios 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let higherNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] > higherNumber) {
//     higherNumber = numbers[index];
//   }
// }

// console.log(higherNumber);

// //exercicios 6

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     result += 1;
//   }
// }

// if (result === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(result);
// }

// //exercicios 7

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let lowerNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] < lowerNumber) {
//     lowerNumber = numbers[index];
//   }
// }

// console.log(lowerNumber);

// //exercicios 8

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultadoDaImpressao = 0;

// for(let i=0; i < numbers.length; i+=1) {
//     let resultadoDaImpressao = numbers[i]>=1 && numbers[i] <=25;
//     console.log(resultadoDaImpressao);
// }

//another way

// let numbers = [];

// for (let i=1; i<=25; i+=1) {
//     numbers.push(i);
// }

// console.log(numbers)

//exercicios 9

// let numbers = [];

// for (let i=1; i<=25; i+=1) {
//     numbers.push(i);
// }

// for (let a = 0; a < numbers.length; a += 1){
//     console.log(numbers[a] / 2);
// };

//Exercicios bonus

// let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let firstIndex = 1; firstIndex < array.length; firstIndex += 1) {
//     for (let secondIndex = 0; secondIndex < firstIndex; secondIndex += 1) {
//       if (array[firstIndex] < array[secondIndex]) {
//         let posicao = array[firstIndex];
//         array[firstIndex] = array[secondIndex];
//         array[secondIndex] = posicao;
//       }
//     }
//   }

//   console.log(array);

//exercicio 10

// let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let firstIndex = 1; firstIndex < array.length; firstIndex += 1) {
//     for (let secondIndex = 0; secondIndex < firstIndex; secondIndex += 1) {
//       if (array[firstIndex] < array[secondIndex]) {
//         let posicao = array[firstIndex];
//         array[firstIndex] = array[secondIndex];
//         array[secondIndex] = posicao;
//       }
//     }
//   }

//   console.log(array);

//exercicio 11

// let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let firstIndex = 1; firstIndex < array.length; firstIndex += 1) {
//     for (let secondIndex = 0; secondIndex < firstIndex; secondIndex += 1) {
//       if (array[firstIndex] > array[secondIndex]) {
//         let posicao = array[firstIndex];
//         array[firstIndex] = array[secondIndex];
//         array[secondIndex] = posicao;
//       }
//     }
//   }

//   console.log(array);

//exercicio 12

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);