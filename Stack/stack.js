/**
 * @name Stack
 *
 * @description
 *
 *
 */

class Stack {
    constructor() {
        this.stack = [];
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return this.stack.length == 0;
    }

    push(val) {
        this.stack.push(val);
    }

    pop() {
        if (this.stack.length == 0) {
            throw new Error("Stack is empty.");
        }

        return this.stack.pop();
    }

    peek() {
        if (this.stack.length == 0) {
            return "No elements in Stack";
        }
        return this.stack[this.stack.length - 1];
    }

    reverse(stack) {
        const tempStack = new Stack();

        while (!stack.isEmpty()) {
            tempStack.push(stack.pop());
        }
        return tempStack;
    }

    displayStack() {
        console.log("Stack Elements are:");

        let str = "";
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + " ";
        }
        console.log(str.trim());
    }
}

export { Stack };
