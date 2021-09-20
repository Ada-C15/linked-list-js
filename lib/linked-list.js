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
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    getFirst() {
        if (!this.#head) return null;
        return this.#head.value;
    }

    /*
    Method to add a new node with the specific data value in the linked list
    insert the new node at the beginning of the linked list
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    addFirst(value) {
        // this.#head = new Node(value, this.#head)
        let newNode = new Node(value);
        newNode.next = this.#head;
        this.#head = newNode;
    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    search(value) {
        let current = this.#head;

        // we run to the end of list
        while (current != null){
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    length() {
        if (!this.#head) return 0;

        let counter = 0;
        let current = this.#head;
        while (current != null){
            counter ++;
            current = current.next;
        }
        return counter;
    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    getAtIndex(index) {

        // if (!this.head) return null;

        let i = 0;
        let current = this.#head;

        while (current) {
            if (i === index) {
                return current.value;
            } else {
                i ++;
                current = current.next;
            }
        } 
        return null;
    }

    /*
    method that returns the value of the last node in the linked list
    returns nil if the linked list is empty
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    getLast() {

        if (!this.#head) return null;

        let current = this.#head;

        while (current.next != null){
            current = current.next;
        }
        return current.value;
    }

    /*
    method that inserts a given value as a new last node in the linked list
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    addLast(value) {

        if (!this.#head){
            this.#head = new Node(value);
            return;
        }

        let current = this.#head;    
        while (current.next != null){
            current = current.next;
        }
        current.next = new Node(value);
    }

    /*
    method to return the max value in the linked list
    returns the data value and not the node
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    findMax() {
        if (!this.#head) return null;

        let max = this.#head.value;
        let current = this.#head;

        while (current != null){
            if (current.value > max){
                max = current.value;
            }
            current = current.next;
        }
        return max;
    }

    /*
    method to delete the first node found with specified value
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    delete(value) {
        if (!this.#head) {
            return null;
        // if head is a match, remove current head by setting next node to head
        } else if (this.#head.value === value) {
            this.#head = this.#head.next;
            return;
        } else {
            let current = this.#head;
            while (current.next != null){
                if (current.next.value === value){
                    // remove node by setting next.next as next
                    current.next = current.next.next;
                    return;
                }
            current = current.next;
            }
        }
    }

    /*
    method to print all the values in the linked list
    Time Complexity: O(n)
    Space Complexity: O(n)
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
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    reverse() {

        if (!this.#head) return;

        let current = this.#head;
        let prev = null;
        let temp = null;

        while (current) {
            // before changing current.next, store this node to temp
            temp = current.next;
            // now do the reverse part by changing current.next pointer to prev node
            current.next = prev;
            // move position of prev and current one step forward
            prev = current;
            current = temp;
            // repeat the process again: save cur.next node to temp then reverse the pointer
        }
        // return prev;
        this.#head = prev;
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