import { Record } from "./record";
/**
 * @name HashTable
 *
 * @description
 */

class HashTable {
  constructor(size) {
    // Initialize array of SIZE and fill with new Records
    //
    this.HT_array = new Array(size).fill(new Record());

    // Set max length of array
    this.max_length = size;

    // current length is 0
    this.length = 0;
  }

  // The Hash function
  H(key) {
    // Logic for the hash function that calculates a hash value
    // In this case calculates an index within the range of the array length
    // Ex key % this.max_length
    return key % this.max_length;
  }

  // Insert a record into the HashTable
  Insert(item) {
    if (this.length == this.max_length) {
      console.error("Hash table is full. Cannot insert the key-value pair");
      return false;
    }

    const index = this.H(item.key); //calculate the index using the hash function
    // Insert the record a the calculated index
    this.HT_array[index] = item;
    // Increment the total count
    this.length++;
    return true;
  }

  // serach for a record given a key in the hash table
  Search(key, returnItem) {
    // calculate the index using the hash function
    const index = this.H(key);

    // if the record at the index is empty or has no key assigned to it, return false
    if (this.HT_array[index] == null || this.HT_array[index].key == -1) {
      return false;
    }

    //found the item in the Hash table
    returnItem.key = this.HT_array[index].key;
    returnItem.value = this.HT_array[index].value;

    return true;
  }

  // Delete a record given the key from the hash table
  Delete(key) {
    const index = this.H(key);

    if (this.HT_array[index] != null && this.HT_array[index].key == key) {
      //mark the spot empty
      this.HT_array[index].key = -1;
      //decrement the Hash table count
      this.length--;
      return true;
    }
    // if the spot is empty or the spot is a differnt key then return false
    return false;
  }
}

export { HashTable };
