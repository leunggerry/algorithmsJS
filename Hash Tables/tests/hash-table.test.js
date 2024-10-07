import { HashTable } from "../hash-table";

/**
 * Setup and Tear down Methods
 */

describe("Hash Table Tests", () => {
  const hashTableLibary = new HashTable(10);

  // Setup Method before each test
  beforeEach(() => {});

  // Tear Down after each test
  afterEach(() => {});

  /**
   * @description
   */
  test("Testing inserting", () => {
    hashTableLibary.Insert({ key: 101, value: "Grokking" });

    expect(hashTableLibary.length).toEqual(1);
  });
});
