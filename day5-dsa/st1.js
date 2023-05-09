// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    // operations
    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    peek() {
        return this.items[this.top];
    }

    isEmpty() {
        return this.top == -1;
    }
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let words = userInput[0].split(' ');
    
    // create a stack
    let stack = new Stack();

    for (let word of words) {
        if (stack.isEmpty()) {
            stack.push(word);
        } else {
            if (word == stack.peek()) {
                stack.pop();
            } else {
                stack.push(word);
            }
        }
    }

    console.log(stack.items.join(' '));

  //end-here
});