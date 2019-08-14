// create a queue using singly linked list
//write a queue class with its core functions from scratch

const Stack = require('./stack')

class _Node {
    constructor(value) {
        this.value = value,
            this.next = null;
        this.prev = null;
    }
}

class StackQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(data) {
        this.stack1.push(data);
    }
    dequeue() {
        let currentNode;
        let result;
        while (this.stack1.top !== null) {
            currentNode = this.stack1.pop();
            if (currentNode) {
                this.stack2.push(currentNode)
            }
        }
        result = this.stack2.pop();
        while (this.stack2.top !== null) {
            this.stack1.push(this.stack2.pop());
        }
        return `removed ${result}`;
    }
}
class Queue {
    // set head and tail for linked list
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
            this.last.prev = node;
        }

        //set new node as the tail, this.last of the queue
        this.last = node;
    }

    // removing method to delete from the end of the linked list
    dequeue() {

        // if theres is nothing in the queue, we have nothing to remove or return
        if (this.first === null) {
            return;
        }
        //the last node will be removed so set the first node as now being the next node
        const node = this.first;
        this.first = node.prev;

        //set current this.last as null
        //set the node before the last as the new last 
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

//queue implementation using a stack
//implement a queue using 2 sttacks and no other data structure
//use stack implementation with a linked list from above to solve this problem


//square dance pairing 
//lol make men dance with women and if they have to wait  tthen maintain a queue
const squareDance = () => {
    const dancers = new Queue();
    //list dancers and genders
    dancers.enqueue({ name: "Jane", gender: "female" });
    dancers.enqueue({ name: "Frank", gender: "male" });
    dancers.enqueue({ name: "John", gender: "male" });
    dancers.enqueue({ name: "Sherlock", gender: "male" });
    dancers.enqueue({ name: "Madonna", gender: "female" });
    dancers.enqueue({ name: "David", gender: "male" });
    dancers.enqueue({ name: "Christopher", gender: "male" });
    dancers.enqueue({ name: "Beyonce", gender: "female" });
    //dancer arrives
    dancerArrives({ name: "Jane", gender: "female" }, dancers);
    dancerArrives({ name: "Frank", gender: "male" }, dancers);
    dancerArrives({ name: "John", gender: "male" }, dancers);
    dancerArrives({ name: "Sherlock", gender: "male" }, dancers);
    dancerArrives({ name: "Madonna", gender: "female" }, dancers);
    dancerArrives({ name: "David", gender: "male" }, dancers);
    dancerArrives({ name: "Christopher", gender: "male" }, dancers);
    dancerArrives({ name: "Beyonce", gender: "female" }, dancers);

    let num = 0;
    let gender;
    while (dancers.first !== null) {
        num++;
        gender = peek(dancers).gender;
        dancers.dequeue();
    }
    console.log(`dancers `, JSON.stringify(dancers));
    return `There are ${num} ${gender} dancer(s) waiting to dance.`;
};

//ophidian bank
//single teller long queue of people
//show what a few minutes of the bank's lobby would look like
function bankLine() {
    let bankQ = new Queue();

    const unfinishedPaperwork = () => {
        //random chance is 25% or less
        const randomChance = Math.random();
        if (randomChance <= 0.25) {
            return true;
        }
        return false;
    };
    //set line to blank
    let line = '';

    for (let i = 0; i < 10; i++) {
        bankQ.enqueue(`customer ${i + 1}`);
        if (bankQ.last !== null) {
            line += `${bankQ.last.value}, `;
        }
    }

    while (bankQ.last !== null) {
        if (unfinishedPaperwork()) {
            console.log(`line `, line);
            bankQ.enqueue(bankQ.dequeue());
            line = line.replace(`${bankQ.last.value}, `, '');
            line += `${bankQ.last.value}, `;
        } else {

            console.log(`line `, line);
            //result
            let result = bankQ.dequeue();
            //replace
            line = line.replace(`${result}, `, '');
        }
    }
}
