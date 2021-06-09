/*This is the class that represent each node on a linked list.*/
class Node {
  val: any;
  next: Node | null;
  constructor(val?: any, next?: Node | null) {
    this.val = val ? val : null;
    this.next = next ? val : null;
  }
}

// operations used in linked list like push, pop, update
class SinglyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.length = 0;
  }
  // method to push node in a list at the end. It is a O(1) operation.
  public push(val: any) {
    // null check
    if (!val) {
      return "Exception no value to insert";
    }
    //create a node
    let node = new Node(val);
    // if we donot have head meaning this is the first node;
    if (!this.head?.val) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    // increase length of node by one
    this.length++;
    return this;
  }

  // insert at the begining of link list. O(1)
  public pushAtBegining(val: any) {
    if (!val) return "Exception nothing to insert";
    // if whole list is empty
    if (!this.head?.val || this.length === 0) {
      // add new node into the link list
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let current = this.head;
      this.head = new Node(val);
      this.head.next = current;
    }
    this.length++;
    return this;
  }

  

  // method to delete a node from the linked list posiioned at end. O(n)
  public pop() {
    // null check
    if (!this.head || this.length === 0) {
      return undefined;
    }
    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next!;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  // shifting- removing from the beggining of list. this is a O(1) operation 
  public popAtBegining() {
    // null check
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    this.head = this.head.next;
    this.length--;
    return current;
  }

  // getting value of list at passed index.O(n) where n is the index.
  public getValueAtIndex(index: number) {
    if (!index) return 'Exception No value to return';
    // index is negative
    if (index < 0 || index > this.length) return null;
    let i = 0;
    let current = this.head;
    while (i < index) {
      current = current?.next!;
      i++;
    }
    return current?.val;
  }

  // method to update the value of node at a particular index.
  public updateValueAtIndex(value: any, index: number) {
    if (!value || !index) return "Exception found-Either value is not provisded or index is not provided";
    if (index < 0 || index > this.length) return null;
    let i=0;
    let current = this.head;
    while(i<index){
      current = current?.next!;
      i++;
    }
    if(current){
      current.val = value;
    }    
    return this;
  }

}

