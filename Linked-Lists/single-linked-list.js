/**
 * @name Singly-Linked-Lists
 *
 * @description
 * A linked list is similar to an array. This holds a list of values, but the difference
 * is that each element in the list does not have an index like in an array. A linked
 * list length does not need to be predetermine and can grow and shrink as the list is
 * edited.
 *
 * Methods created for linked list
 * Done: size addLast, addFirst removeFirst, removeLast, isEmpty, indexOf
 * Todo addAt, remove, removeAt, elementAt, findMiddle, clean, rotateListRight
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.size === 0;
    }
    addFirst(val) {
        let oldHead = this.head;

        // if head of list is empty create a new head of list
        if (oldHead == null) {
            this.head = new Node(val);
            this.length++;
            return this.length;
        }

        //otherwise create a new node and append the rest of the list to the end of this node
        this.head = new Node(val);
        this.head.next = oldHead;

        // increment the length of the list
        this.length++;
    }

    addLast(val) {
        let node = this.head;

        //check if this is the first node
        if (node == null) {
            this.head = new Node(val);
            this.length++;
            return;
        }

        //traverse the list to the end of the list
        while (node.next != null) {
            node = node.next;
        }

        //once reach the end of the list add the new node to the end of the list
        node.next = new Node(val);
        // increment length of list
        this.length++;
    }

    removeFirst() {
        let node = this.head;
        //check if the list is null
        if (node == null) {
            this.length--;
            return null;
        }
        // otherwise get the first node
        let removeNode = this.head; // return the head of the list as the second node;
        this.head = this.head.next;
        this.length--;

        return removeNode.val;
    }

    removeLast() {
        let node = this.head;

        //check if the list is empty
        if (node == null) {
            return;
        }

        //check if this is the only node
        if (node.next == null) {
            this.head == null;
            this.length--;
            return;
        }

        //otherwise traverse the list to the seond last node and remove it
        while (node.next.next != null) {
            node = node.next;
        }

        //reached the second last node, remove the last node
        const removeNode = node.next;
        node.next = null;
        this.length--;

        return removeNode.val;
    }

    //return the index of the value in question, otherwise return null
    indexOf(val) {
        let cur = this.head;

        //check if list is empty
        if (cur === null) {
            return null;
        }

        //start index search
        let index = 0;
        while (cur !== null) {
            // if we found the value return the index
            if (cur.val === val) {
                return index;
            }
            //otherwise keep incrementing to the next node and increment the index
            cur = cur.next;
            index++;
        }
        // when loop ends, means we've reached the end of the list and can't find the value
        return null;
    }

    displayList() {
        let node = this.head;

        let output = "";
        while (node) {
            output += node.val + "->";
            node = node.next;
        }
        output += "NULL";
        console.log(output);
    }
}

export { Node, SinglyLinkedList };
