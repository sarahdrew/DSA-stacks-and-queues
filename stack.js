class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

//Create a stack class 
//write a stack class with core functions

class Stack {
    constructor() {
        this.top = null;

    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        //create a new node with data and set it as the new top
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        //reassign the top tot tthe next item in stack to remove top item
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

//create a stack called StarTrek and add kirk, spock, mccoy, and scotty
function main() {
    let StarTrek = new Stack;

    StarTrek.push('kirk')
    StarTrek.push('spock')
    StarTrek.push('mccoy')
    StarTrek.push('scotty')
}
main();
// useful methods for stack
//peek() display top of stack
//isEmpty() allows you tto check if stack is empty
//display() displays the stack, whats first item?
//Remove mccoy from stack and display stack

function peek(stack) {
    if (stack.top === null) {
        return 'Stack is empty.'
    }
    return stack.top.data
}
function isEmpty(stack) {
    return JSON.stringify(stack, null, 2)
}

//Check for palindromes using a stack