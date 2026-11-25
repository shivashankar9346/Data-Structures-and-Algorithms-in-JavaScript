class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addFirst(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    reverse(){
        let prev = null;
        let current = this.head;
        let next = null;

        while(current!==null){

            next = current.next;
            current.next = prev;
            prev=current;
            current=next

        }
        this.head = prev;
        
    }

    print(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next
            
        }
    }
}

let linkedlist = new LinkedList();

linkedlist.addFirst(5)
linkedlist.addFirst(4)
linkedlist.addFirst(3)

linkedlist.reverse()

linkedlist.print()