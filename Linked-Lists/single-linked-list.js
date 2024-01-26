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

    addNode(val) {
        let node = this.head;

        // if head of list is empty create a new head of list
        if (node == null) {
            this.head = new Node(val);
            return;
        }

        // otherwise keep moving to the next node until we reach the end of the list
        while (node.next != null) {
            node = node.next;
        }

        // when the end of list is reached create a new node and append to the end of the list
        node.next = new Node(val);
    }

    displayList() {
        let node = this.head;

        let output = "";
        while(node) {
            output += node.val + "->";
            node = node.next;
        }
        output += "NULL";
        console.log(output);
    }
}

export {Node, SinglyLinkedList}