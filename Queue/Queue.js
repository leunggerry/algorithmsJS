/**
 * @name Queue
 *
 * @description This is an implementation of a Queue data structure, that will allow the
 *              user to add an element to the end of the list and remove the element at
 *              the front. A queue follows a FIFO (First In First Out) flow, where the
 *              first element enters the queue is the first element to be removed.
 *
 *              This uses an array to implemnt the data structure and methods
 */

class Queue {
    constructor() {
        this.queue = [];
    }

    /**
     * @description Given a value add it to the queue
     */
    enqueue(value) {
        this.queue.push(value);
    }

    /**
     * @description Return the first value in the list if there are values, otherwise return -1
     */
    dequeue() {
        if (this.isEmpty()) {
            return -1;
        }

        return this.queue.shift();
    }

    /**
     * @description Check if the queue is empty and return true or false
     * @returns true or false
     */
    isEmpty() {
        return this.queue.length == 0;
    }

    /**
     * @description Find and return the first value in the queue without removing it from teh queue
     *
     * @returns Integer
     */
    peekFirst() {
        // check if the queue is empty
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[0];
    }

    /**
     * @description Find and return the last element in the queue without removing it from the queue
     *
     * @returns Integer
     */
    peekLast() {
        // check if the queue is empty
        if (this.isEmpty()) {
            return -1;
        }
        const lastIdx = this.queue.length - 1;
        return this.queue[lastIdx];
    }
}
