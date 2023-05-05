// Implementation of the Linked List
// Singly Linked List
/*
    head = {
        data: 3,
        next: {
            data: 4,
            next: {
                data: 5,
                next: {
                    data: 6,
                    next: null
                }
            }
        }
    }

    head = {
        data: 2,
        next: {
            data: 3,
            next: {
                data: 3.5,
                next: {
                    data: 4,
                    next: {
                        data: 5,
                        next: {
                            data: 6,
                            next: null
                        }
                    }
                }
            }  
        }
    }

    3.5 between 3 and 4

    newNode = {
        data: 3.5,
        next: {
            data: 4,
            next: {
                data: 5,
                next: {
                    data: 6,
                    next: null
                }
            }
        }
    }
*/

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // methods
    insertHead(data) {
        this.head = new Node(data, this.head);
    }

    toString() {
        let nodes = [];
        let thead = this.head;
        // traverse a linked list
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        return nodes;
    }

    insertTail(data) {
        
    }
}

// create a new list
let list = new LinkedList();

// list.head = new Node(3);
// list.head.next = new Node(4);
// list.head.next.next = new Node(5);

// // list.head = new Node(2, list.head);
// // OR
// // create a new node
// let newNode = new Node(2);
// newNode.next = list.head;
// list.head = newNode;

// console.log(list);

list.insertHead(5);
list.insertHead(4);
list.insertHead(3);
list.insertHead(2);
console.log(list.toString());

/*
    list = LinkedList {
        head: Node {
            data: 2,
            next: Node {
                data: 3,
                next: Node {
                    data: 4,
                    next: null
                }
            }
        }
    }
*/