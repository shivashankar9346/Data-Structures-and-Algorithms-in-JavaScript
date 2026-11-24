

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }

    addFirst(data){
        let newNode = new Node(data)

        newNode.next = this.head;
        this.head = newNode
    }

    findMiddle() {
        let slow = this.head;
        let fast = this.head;
        while(fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        if (slow) {
            console.log("Middle Node:", slow.data);
        } else {
            console.log("Linked List is empty");
        }
    }

    print(){
      let current = this.head;

      while(current){
        console.log(current.data);
            current = current.next
      }

        
    }
}

const linkedlist = new LinkedList();

linkedlist.addFirst(50);
linkedlist.addFirst(40);
linkedlist.addFirst(30);
linkedlist.addFirst(20);
linkedlist.addFirst(10);

linkedlist.findMiddle();

linkedlist.print()