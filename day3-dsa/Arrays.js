/*
    Data structures = structure of data

    Manipulation of data in the memory
        - create a memory or allocate a memory and store a data in it
        - edit/update the value in the memory
        - delete the value from the memory
        - search over the memory for a particular value
    
    Which data structures suits/ required while solving the problem ?

    Primitive Types:

        - Arrays
        - Strings
*/

// let numbers = [1, 2, 3, 4, 5];
//            [0][1][2][3][4]

// console.log(numbers[6]);

// traversing the array
// for (let index = 0; index<numbers.length; index++){
//     console.log(numbers[index]);
// }

// let index = 0;
// while ( index<numbers.length){
//     console.log(numbers[index]);
//     index++;
// }

// let index = 0;
// for (; index < numbers.length;){
//     console.log(numbers[index]);
//     index++;
// }

// for...of loop
// for (let number of numbers) {
//     console.log(number);
// }

// for...in loop
// for (let index in numbers) {
//     console.log(index, numbers[index]);
// }

// numbers.forEach((number) => {
//     console.log(number);
// });

// let word = "apple";
// let word = 'apple';
// let word = `apple`;

// console.log(word.length);

// console.log(word[1]);

// for (let index = 0; index < word.length; index++){
//     console.log(word[index]);
// }

// for (let char of word) {
//     console.log(char);
// }

// let numbers = [1, 2, 3, 4];

// numbers[0] = 10;

// console.log(numbers);

// strings are immutable
// let word = 'apple';

// word[0] = 'i';

// console.log(word);

// let word = new String('apple');

// console.log(word.toUpperCase());

// difference: primitive strings are faster than the string objects

// let array = [];

// array.push(4);
// array.push(6);
// array.push(7);
// array.pop();

// // push - pushing the element into the end of the array
// // pop - popping the element from the end of the array
// // unshift - pushing the element into the beginning of the array
// // shift - removing the element from the end of the array

// array.unshift(3);
// array.unshift(2);
// array.shift();
// // splice - insert or remove an element @ any of the positions of the array
// array.splice(1, 0, 3.5);
// array.splice(2, 1);

// console.log(array);

// let array = new Array();

// array.push(1);

// console.log(array);

const Array = require('./libraries/Array');

// create a new array
let numbers = new Array();

numbers.push(4);
numbers.push(5);
numbers.pop();
numbers.unshift(3);

// print the entire array
// console.log(numbers.toString());

numbers.whileEach((value) => console.log(value+5));