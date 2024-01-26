import { SinglyLinkedList } from "../single-linked-list"

test('check addNode', () => { 
    //check empty list
    const list = new SinglyLinkedList();
    expect(list.length).toEqual(0);
 })
 