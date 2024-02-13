import { QueueLL } from "../QueueLL";

/**
 * Test both the array implementations and the class implementations Queue
 *
 * @todo create mock functions
 */

describe("Linked List implementation of Queue", () => {
    /**
     * Setup and Tear down for each test case
     */
    const TEST_QUEUE_LL = new QueueLL();
    const TEST_EMPTY_Q_LL = new QueueLL();

    //need to mock the functions
    beforeEach(() => {
        TEST_QUEUE_LL.enqueue(1);
        TEST_QUEUE_LL.enqueue(2);
        TEST_QUEUE_LL.enqueue(3);
        TEST_QUEUE_LL.enqueue(4);
        TEST_QUEUE_LL.enqueue(5);
        TEST_QUEUE_LL.enqueue(6);
        TEST_QUEUE_LL.enqueue(7);
        TEST_QUEUE_LL.enqueue(8);
        TEST_QUEUE_LL.enqueue(9);
    });

    afterEach(() => {
        while (TEST_QUEUE_LL.length > 0) {
            TEST_QUEUE_LL.dequeue();
        }
    });

    test("test the display block", () => {
        TEST_QUEUE_LL.displayList();

        TEST_EMPTY_Q_LL.displayList();
    });

    test("test convert to array", () => {
        console.log(TEST_QUEUE_LL.convertToArray());
    });
});
