import { SinglyLinkedList } from "../single-linked-list";

test("check addNode", () => {
    //check empty list
    const list = new SinglyLinkedList();
    expect(list.length).toEqual(0);

    list.displayList();
});

test("add node to list", () => {
    const list = new SinglyLinkedList();

    console.log("Check addFirst");
    //add one node to the list
    list.addFirst(1);
    expect(list.length).toEqual(1);
    list.addFirst(2);
    expect(list.length).toEqual(2);
    list.displayList();

    console.log("Check addLast");
    list.addLast(3);
    expect(list.length).toEqual(3);

    list.displayList();
});

test("remove node from list", () => {
    const list = new SinglyLinkedList();

    list.addLast(1);
    list.addLast(2);
    list.addLast(3);
    list.addLast(4);
    list.addLast(5);
    list.displayList();

    //remove the first node
    expect(list.removeFirst()).toEqual(1);
    expect(list.length).toEqual(4);
    list.displayList();

    //remove the last node
    expect(list.removeLast()).toEqual(5);
    list.displayList();
});

test("indexOf", () => {
    const list = new SinglyLinkedList();

    list.addLast(2);
    list.addLast(4);
    list.addLast(6);
    list.addLast(8);
    list.addLast(20);
    list.displayList();

    // return the index of "8"
    expect(list.indexOf(8)).toEqual(3);
});
