/**
 * @description Implement a queue data structure using linked lists.
 *              A queue is a data structure that allows users to add an element to the
 *              end of th elist and remove the element at the front. This data structure
 *              follows  FIFO flow, where the first element that enters is the first
 *              element to be removed.
 */

class QueueLL {
    //private definition
    #size;

    constructor() {
        this.head = null;
        this.tail = null;
        this.#size = 0;
    }

    isEmpty() {
        return this.length == 0;
    }

    get length() {
        return this.#size;
    }

    enqueue(value) {
        const node = { data: value, next: null };
        // check if the list is empty
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        // otherwise we are continuing the list, update tail's next node and the new tail to be the new node
        else {
            this.tail.next = node;
            this.tail = node;
        }

        //update the size and return the value
        return ++this.#size;
    }

    dequeue() {
        // check if the queue is empty and throw an error
        if (this.isEmpty()) {
            throw new Error("The Queue is empty");
        }

        const value = this.head.data;

        this.head = this.head.next;

        // check if the updated head is null, then we have return the listback to empty
        if (!this.head) {
            this.tail = null;
        }

        --this.#size;

        return value;
    }

    peekFirst() {
        //1. check if the list is empty
        if (this.isEmpty()) {
            throw new Error("The Queue is empty");
        }
        //2. go to the head of the list and return the data value of the queue
        return this.head.data;
    }

    peekLast() {
        //check if the list is empty
        if (this.isEmpty()) {
            throw new Error("The Queue is empty");
        }
        return this.tail.data;
    }

    convertToArray() {
        //create array to populate the list
        const queueArr = [];
        let cur = this.head;

        while (cur) {
            //push the data to the array
            queueArr.push(cur.data);

            //move to the next node in the list
            cur = cur.next;
        }

        return queueArr;
    }

    displayList() {
        let str = "";
        let cur = this.head;

        while (cur) {
            str += cur.data + " -> ";

            cur = cur.next;
        }
        str += " NULL";

        console.log(str);
    }
}

export { QueueLL };
