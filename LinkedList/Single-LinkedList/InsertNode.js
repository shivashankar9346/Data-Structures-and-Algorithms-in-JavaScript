class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }

    addFirst(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode
    }
    print(){
        let current = this.head

        while(current){
            console.log(current.data);
            current = current.next
        }
    }


}
const linkedlist = new LinkedList();

linkedlist.addFirst(5)
linkedlist.addFirst(4)
linkedlist.addFirst(3)
linkedlist.addFirst(2)


linkedlist.print()