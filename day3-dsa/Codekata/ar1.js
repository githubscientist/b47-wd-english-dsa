// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

    // handle the input
    let length = parseInt(userInput[0]);
    let numbers = userInput[1].split(' ').map(item => parseInt(item));

    // find the frequencies of all the elements of the array
    let frequencies = {};

    // populate the frequencies object with the keys from the array
    for (let number of numbers) {
        frequencies[number] = 0;
    }

    for (let number of numbers) {
        frequencies[number]++;
    }

    // sort the array in terms of the frequencies
    console.log(Object.entries(frequencies).sort((a, b) => a[1]-b[1]).map(subArray => subArray[0]).join(' '));

  //end-here
});