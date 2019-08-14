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
//start with provided code

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    const tStack = new Stack();
    let reverseString = '';
    for (let i = 0; i < s.length; i++) {
        tStack.push(s[i]);
    }
    while (tStack.top !== null) {
        reverseString += tStack.pop();
    }
    return reverseString;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));


//matching parentheses in an expression
function checkBracks(str) {
    const testStack = new Stack();

    for (let i = 0; i < str.length; i++) {
        //loop starts
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            testStack.push(str[i]);
        }
    }

    console.log(JSON.stringify(testStack, null, 2));
    //while j is less than length
    let j = 0;
    while (j < str.length) {
        if (str[j] === ')' || str[j] === ']' || str[j] === '}') {
            testStack.pop();
        }
        j++;
    }

    console.log(JSON.stringify(testStack, null, 2));

    if (testStack.top === null) {
        return true;
        //else false
    } else {
        return false;
    }
}

console.log(checkBracks('(([{}]))'));

// sort stack
//make smallest items on the top 
//can only use additional stack, not array or linked list
function sortStack(stack) {
    //make working stack new stack
    let workingStack = new Stack;
    let currentNode;

    //pop  input
    workingStack.push(stack.pop());

    while (!isEmpty(stack)) {
        currentNode = stack.pop();

        if (isEmpty(workingStack)) {
            workingStack.push(currentNode);
        }

        if (peek(workingStack) < currentNode) {
            stack.push(workingStack.pop());
            workingStack.push(currentNode);
        }
        else {
            workingStack.push(currentNode);
        }

    }
    return workingStack;
}

module.exports = Stack;
