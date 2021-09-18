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
    // #head;
    constructor() {
        // The # before the variable name indicates
        //   a private variable.
        this.head = null;
    }

    /* 
    Method to retrieve the value in the first node.
    returns null if the list is empty.
    Time Complexity: O1
    Space Complexity: O1
    */
    getFirst() {
        return this.head
    }

    /*
    Method to add a new node with the specific data value in the linked list
    insert the new node at the beginning of the linked list
    Time Complexity: O1
    Space Complexity: O1
    */
    addFirst(value) {
        this.head = new Node(value, this.head)
    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: On
    Space Complexity: O1
    */
    search(value) {
        if (!this.head) return false;

        let currentItem = this.head

        while (currentItem){
            if (currentItem.value == value) return true;
            currentItem = currentItem.next
        }
        return false
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: On
    Space Complexity: O1
     */
    length() {
        if (!this.head) return 0;

        let counter = 0
        let currentItem = this.head

        while (currentItem){
            counter ++
            currentItem = currentItem.next
        }
        return counter;
    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: On
    Space Complexity: O1
     */
    getAtIndex(index) {
        if (!this.head) return null;

        let counter = 0
        let currentItem = this.head

        while (currentItem){
            if (counter == index) return currentItem.value;
            counter ++
            currentItem = currentItem.next
        }
    }

    /*
    method that returns the value of the last node in the linked list
    returns nil if the linked list is empty
    Time Complexity: On
    Space Complexity: O1
    */
    getLast() {
        if (!this.head) return null;

        let currentItem = this.head

        while (currentItem.next){
            currentItem = currentItem.next
        }
        return currentItem.value;
    }

    /*
    method that inserts a given value as a new last node in the linked list
    Time Complexity: on
    Space Complexity: O1
    */
    addLast(value) {
        if (!this.head) {
            this.addFirst(value)
            return
        };
        let currentItem = this.head
        while (currentItem.next){
            currentItem = currentItem.next
        }
        currentItem.next = new Node(value)
        return this.head;
    }

    /*
    method to return the max value in the linked list
    returns the data value and not the node
    Time Complexity: On
    Space Complexity: O1
    */
    findMax() {
        if (!this.head) return null;

        let max = 0
        let currentItem = this.head

        while (currentItem){
            if (max < currentItem.value){
                max = currentItem.value;
            }
            currentItem = currentItem.next
        }
        return max
    }

    /*
    method to delete the first node found with specified value
    Time Complexity: On
    Space Complexity: O1
    */
    delete(value) {
        if (!this.head) return null;
        if (this.head.value == value) {
            this.head = this.head.next
            return
        }
        let currentItem = this.head;    
        let previous 

        while (currentItem != null){
            if (currentItem.value == value){
                previous.next = currentItem.next
            } 
            previous = currentItem
            currentItem = currentItem.next
        }
    }
    /*
    method to print all the values in the linked list
    Time Complexity: On
    Space Complexity: O1
    */
    visit() {
        const helper_list = []
        if (this.head){
            current = this.head;
        }
        while (current) {
            helper_list.push(current.value);
            current = current.next;
        }

        console.log(helper_list.toString());
    }


    /*
    method to reverse the singly linked list
    note: the nodes should be moved and not just the values in the nodes
    Time Complexity: On
    Space Complexity: O1
    */
    reverse() {
        if (!this.head) return;
        let reversed 
        let currentItem = this.head
        let nextItem 
        while (currentItem){
            nextItem = currentItem.next;
            currentItem.next = reversed;
            reversed = currentItem
            currentItem = nextItem
        }
        this.head = reversed
    }


    while (current) {
        // hold the next node temporarily
        nextTemp = current.next;
        // change current to point at the previous node
        current.next = previous;
        // increment previous and current each by one
        previous = current;
        current = nextTemp;
    }

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
        if (!this.head) return; // don't do anything if the linked list is empty

        // navigate to the last node
        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = this.head;
    }

    end

}

module.exports = LinkedList;