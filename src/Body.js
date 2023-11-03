class Body {
    constructor(el, left, top) {
        this.node = document.createElement('div');
        this.node.setAttribute('id', 'body');
        el.appendChild(this.node);
        this.length = 0;
        this.node.style.left = `${left}px`;
        this.node.style.top = `${top}px`;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    addToHead(left, top) { // for changing head
        const newNode = new Node(left, top);
        newNode.next = this.head;
        this.head = newNode;
    }
    removeFromTail() { // for changing from body to board
        let currentNode = this.head;
        let previousNode = null;
        while (currentNode.next !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
        this.tail = previousNode;
    }
    addToTail(left, top) { // when head eats an apple
        const newNode = new Node(left, top);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    contains(left, top) {
        let current = this.head;
        while (current.next) {
            if (current.left === left && current.top === top) {
            return true;
            }
            current = current.next;
        }
        return false;
    }
}
class Node {
    constructor(leftPosition, topPosition) {
        this.left = leftPosition;
        this.top = topPosition;
        this.next = null;
    }
}