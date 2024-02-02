import { Stack } from "../stack";

/**
 *
 */

describe("Stack implementation test cases", () => {
    const testStack = new Stack();

    beforeEach(() => {
        // fill the stack

        testStack.stack.push(1);
        testStack.stack.push(3);
        testStack.stack.push(5);
        testStack.stack.push(7);
        testStack.stack.push(9);
        testStack.stack.push(11);

        testStack.displayStack();
    });

    afterEach(() => {
        // clear the stack

        while (testStack.size() > 0) {
            testStack.stack.pop();
        }
    });

    test("test isEmpty", () => {
        const emptyStack = new Stack();

        expect(testStack.isEmpty()).toEqual(false);

        expect(emptyStack.isEmpty()).toEqual(true);
    });

    test("test push", () => {
        testStack.push(13);

        expect(testStack.stack.length).toEqual(7);
    });

    // test("test reverse", () => {
    //     console.log(testStack);

    //     const reverseStack = testStack.reverse(testStack);
    //     console.log(reverseStack);

    //     expect(testStack.reverse(testStack).stack).toBe(
    //         testStack.stack.reverse()
    //     );
    // });
});
