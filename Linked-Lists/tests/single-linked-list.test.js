import { SinglyLinkedList } from "../single-linked-list";

/**
 * Setup and Tear down Methods
 */

describe("Single Linked Lists Test", () => {
    const testListTens = new SinglyLinkedList();
    const testListEven = new SinglyLinkedList();

    beforeEach(() => {
        //testList = new SinglyLinkedList();

        testListTens.addLast(10);
        testListTens.addLast(20);
        testListTens.addLast(30);
        testListTens.addLast(40);
        testListTens.addLast(50);

        testListEven.addLast(2);
        testListEven.addLast(4);
        testListEven.addLast(6);
        testListEven.addLast(8);
        testListEven.addLast(10);
        testListEven.addLast(12);
    });

    afterEach(() => {
        testListTens.clean();

        testListEven.clean();
    });
    test("check addNode", () => {
        //check empty list
        const list = new SinglyLinkedList();
        expect(list.length).toEqual(0);

        //list.displayList();
    });

    test("add node to list", () => {
        const list = new SinglyLinkedList();

        console.log("Check addFirst");
        //add one node to the list
        list.addFirst(1);
        expect(list.length).toEqual(1);
        list.addFirst(2);
        expect(list.length).toEqual(2);
        //list.displayList();

        console.log("Check addLast");
        list.addLast(3);
        expect(list.length).toEqual(3);

        //list.displayList();
    });

    test("remove node from list", () => {
        const list = new SinglyLinkedList();

        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        //list.displayList();

        //remove the first node
        expect(list.removeFirst()).toEqual(1);
        expect(list.length).toEqual(4);
        //list.displayList();

        //remove the last node
        expect(list.removeLast()).toEqual(5);
        //list.displayList();
    });

    test("indexOf", () => {
        // return the index of "8"
        expect(testListEven.indexOf(8)).toEqual(3);

        expect(testListTens.indexOf(30)).toEqual(2);
    });

    test("test elementAt", () => {
        expect(testListTens.elementAt(2)).toEqual(30);

        expect(testListTens.elementAt(1)).toEqual(20);
    });

    test("test findMiddle", () => {
        // test odd number list
        expect(testListTens.findMiddle().val).toEqual(30);

        //testListEven.displayList();
        //test even number list
        expect(testListEven.findMiddle().val).toEqual(8);
    });
});
