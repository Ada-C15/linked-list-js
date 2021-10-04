// Defines a node in the singly linked list
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
// Defines the singly linked list
class LinkedList {
    // keep the head private. Not accessible outside this class
    // note that this language feature is only available from Node 12 on
    #head;
    constructor() {
        // The # before the variable name indicates
        //   a private variable.
        this.#head = null;
    }

    /* 
    Method to retrieve the value in the first node.
    returns null if the list is empty.
    Time Complexity: ?
    Space Complexity: ?
    */
    getFirst() {
        return this.#head.value;
    }

    /*s
    Method to add a new node with the specific data value in the linked list
    insert the new node at the beginning of the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    addFirst(value) {
        if (this.size == 0) return null;
        let node = new Node(value);
        node.next = this.#head;
        this.#head = node;


    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: ?
    Space Complexity: ?
    */
    search(value) {
        if (!this.#head) return false;
        let current = this.#head;

        while (current) {
            if (current.value == value) return true;
            current = current.next; 
        }

        return false;
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: ?
    Space Complexity: ?
     */
    length() {

        let listLength = 0;

        let current = this.#head;

        while (current) {
            current = current.next;
            listLength++;
        }

        return listLength;
    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: ?
    Space Complexity: ?
     */
    getAtIndex(index) {
        let currentIndex = 0;
        let current = this.#head;

        while(current) {
            if (currentIndex === index) {
                return current.value;
            }
            currentIndex++;
            current = current.next;
        }
        return null;
    }

    /*
    method that returns the value of the last node in the linked list
    returns nil if the linked list is empty
    Time Complexity: ?
    Space Complexity: ?
    */
    getLast() {
        if (!this.#head) return null;
        let current = this.#head

        while (current.next) {
            current = current.next

        }
        return current.value;

    }

    /*
    method that inserts a given value as a new last node in the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    addLast(value) {
        let node = new Node(value);
        let current;
        if (!this.head) {
            this.head = node
        } else {
            current = this.#head;
        }
    }

    /*
    method to return the max value in the linked list
    returns the data value and not the node
    Time Complexity: ?
    Space Complexity: ?
    */
    findMax() {
        let current = this.#head;
        if (!current) return null;

        let max = current.value;

        while (current) {
            if (current.value > max) {
                max = current.value;
            }
            current = current.next;
        }
        return max;
    }

    /*
    method to delete the first node found with specified value
    Time Complexity: ?
    Space Complexity: ?
    */
    delete(value) {
        if (!this.#head) return null;

        if (this.#head.value === value) {
            this.#head = this.#head.next;
            return; 
        }

        let current = this.#head;
        let last; 

        while (current) {
            if (current.value === value){
                last.next = current.next;
            }
            last = current;
            current = current.next;
            
        }
    }

    /*
    method to print all the values in the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    visit() {
        const helper_list = []
        current = this.#head;

        while (current) {
            helper_list.push(current.value);
            current = current.next;
        }

        console.log(helper_list.toString());
    }


    /*
    method to reverse the singly linked list
    note: the nodes should be moved and not just the values in the nodes
    Time Complexity: ?
    Space Complexity: ?
    */
    reverse() {
        let current = this.#head;
        if (!current) return null;

        let first = current;
        let last;

        while (current) {
            last = current.next;
            current.next = first;
            first = current;
            current = last;

        }
        return this.#head = first;   
    };

    // Advanced Exercises
    /*
    returns the value at the middle element in the singly linked list
    Time Complexity: ?
    Space Complexity: ?
     */
    findMiddleValue() {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    find the nth node from the end and return its value
    assume indexing starts at 0 while counting to n
    Time Complexity: ?
    Space Complexity: ?
    */
    findNthFromEnd(n) {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    checks if the linked list has a cycle. A cycle exists if any node in the
    linked list links to a node already visited.
    returns true if a cycle is found, false otherwise.
    Time Complexity: ?
    Space Complexity: ?
    */
    hasCycle() {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    Helper method for tests
    Creates a cycle in the linked list for testing purposes
    Assumes the linked list has at least one node
    */
    createCycle() {
        if (!this.#head) return; // don't do anything if the linked list is empty

        // navigate to the last node
        let current = this.#head;
        while (current.next) {
            current = current.next;
        }

        current.next = this.#head;
    }

    end

}

module.exports = LinkedList;