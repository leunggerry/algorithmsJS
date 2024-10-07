/**
 * @description Binary Trees are a type of tree where each node can have a
 *              maximum of two children.
 */

class Node {
    // each node has 3 properties a data value holder, NN2No .2
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        //check if there is a root node
        if (this.root == null) {
            this.root = newNode;
            return this;
        }

        //1 - check if the value is greate or less than the curent current node
        //2 - if it is less than, check the left side of the node and repeat operation from 1. If it is not a node, add the node
        //2 - if it is greater than the curent node, check the right side of the node and repeat operion from 1. If there is not a node, add the node
        let current = this.root;
        while (true) {
            // prevent duplicates, if value exists return undefined
            if (data == current.data) {
                return undefined;
            }
            if (data < current.data) {
                // go check the left side
                if (current.left != null) {
                    current = current.left;
                }
                //no data on the left side, add it to the left side
                else {
                    current.left = newNode;
                    return this;
                }
            }
            // data is greater than current
            // check the right side
            else {
                // see if there is a node there
                if (current.right != null) {
                    current = current.right;
                } else {
                    //no data on the irhgt side, add the new node
                    current.right = newNode;
                    return;
                }
            }
        }
    }

    delete(data) {}

    traverse() {}
}

function print2DUtil(root, space) {
    // Base case
    if (root == null) return;

    // Increase distance between levels
    space += 10;

    // Process right child first
    print2DUtil(root.right, space);

    // Print current node after space
    // count
    console.log("\n");
    for (let i = 10; i < space; i++) console.log("  ");
    console.log(root.data + "\n");

    // Process left child
    print2DUtil(root.left, space);
}

//wrapper
function printTree(tree) {
    print2DUtil(tree.root, 0);
}
const BT = new BinaryTree();

BT.insert(8);
BT.insert(1);
BT.insert(9);
BT.insert(10);
BT.insert(2);
BT.insert(5);
BT.insert(7);

console.log(JSON.stringify(BT));
//printTree(BT);
