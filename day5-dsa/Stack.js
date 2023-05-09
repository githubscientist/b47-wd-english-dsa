/*
    Stack - a datastructure

    Abstract Data Type - define its behaviour and operations

    LIFO (Last In First Out) or FILO (First In Last Out)

    Operations:

    1. Push - push the data into the stack
    2. Pop - pop the data (remove the data) from the stack
    3. Peek - get the topmost element from the stack
    4. isEmpty - return true if the stack is empty false otherwise

    Implementation:

    1. Array
    2. Object
*/
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

// let stack = new Stack();

// stack.push(4);
// stack.push(5);
// stack.pop();
// stack.push(6);
// console.log(stack.peek());

// console.log(stack);