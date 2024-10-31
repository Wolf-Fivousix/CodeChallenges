// Easy

// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:

// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 

// Example 1:

// Input
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// Output
// [null, null, null, true, false, null, true, null, false]

// Explanation
// MyHashSet myHashSet = new MyHashSet();
// myHashSet.add(1);      // set = [1]
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(1); // return True
// myHashSet.contains(3); // return False, (not found)
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(2); // return True
// myHashSet.remove(2);   // set = [1]
// myHashSet.contains(2); // return False, (already removed)
 

// Constraints:

// 0 <= key <= 106
// At most 104 calls will be made to add, remove, and contains.

/*
In JS, objects kind of work like a HashSet, so I will assume this exercise does NOT want us to use it.

In this case, we need to store the data some other way. Let's use an array of "keys".

When we look up a key, we iterate through the array.
When we add a key, we check if the key exists. If it does, we return true. If it doesn't, add to the end of array.
When we remove a key, we iterate through the array to see if it exists. If it does, then use "toSplice" to remove it.

This is NOT efficient, as we can't leverage a random access property, which is a basic construct of JavaScript.
Each operation is Linear Time Complexity, as it will iterate through the whole thing at worst case cenarios.
Space wise we can say it is Constant, if we are not considering the memory we use to store the input itself. Otherwise it will be Linear as well, as the array will grow as we add more elements to it.
*/



function MyHashSet() {
    this.entries = []
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    for (let i = 0; i < this.entries.length; ++i) {
        if (this.entries[i] === key) return
    }

    this.entries.push(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    for (let i = 0; i < this.entries.length; ++i) {
        if (this.entries[i] === key) {
            this.entries.splice(i, 1)
            return
        }
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    for (let i = 0; i < this.entries.length; ++i) {
        if (this.entries[i] === key) return true
    }

    return false
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

const myHashSet = new MyHashSet()
console.log(myHashSet.contains("wolf"))  // False
myHashSet.add("wolf")
myHashSet.add("wolf") // This key will not show as duplicated
console.log(myHashSet)
console.log(myHashSet.contains("wolf")) // True
myHashSet.remove("bananas")
console.log(myHashSet)
myHashSet.remove("wolf")
console.log(myHashSet)


// Runtime 138 ms Beats 17.02%
// Memory 61.84 MB Beats 56.89%
