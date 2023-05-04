class Item {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Array {
    constructor() {
        this.head = null;
    }

    toString() {
        let nodes = [];
        let thead = this.head;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        return nodes;
    }

    push(data) {
        let newItem = new Item(data);
        if (this.head == null) {
            this.head = newItem;
        } else {
            let thead = this.head;
            while (thead.next != null) {
                thead = thead.next;
            }
            thead.next = newItem;
        }
    }

    pop() {
        if (this.head != null) {
            if (this.head.next == null) {
                this.head = null;
            } else {
                let thead = this.head;
                while (thead.next.next != null) {
                    thead = thead.next;
                }

                thead.next = null;
            }
        }
    }

    whileEach(func) {
        let thead = this.head;
        while (thead != null) {
            func(thead.data);
            thead = thead.next;
        }
    }

    unshift(data) {
        let newItem = new Item(data);
        if (this.head == null) {
            this.head = newItem;
        } else {
            newItem.next = this.head;
            this.head = newItem;
        }
    }
}

module.exports = Array;